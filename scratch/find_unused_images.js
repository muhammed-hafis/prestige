const fs = require('fs');
const path = require('path');

const publicImagesDir = path.join(process.cwd(), 'public', 'images');
const srcDir = path.join(process.cwd(), 'src');

const imageFiles = fs.readdirSync(publicImagesDir);
const usedImages = new Set();

function walk(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
  });
}

walk(srcDir, (filePath) => {
  if (filePath.endsWith('.jsx') || filePath.endsWith('.js') || filePath.endsWith('.css')) {
    const content = fs.readFileSync(filePath, 'utf8');
    imageFiles.forEach(image => {
      if (content.includes(image)) {
        usedImages.add(image);
      }
    });
  }
});

// Also check the products data file specifically if it's in a different location or needs direct checking
// list_dir earlier showed src/app/_data/products.js exists.
const productsDataPath = path.join(srcDir, 'app', '_data', 'products.js');
if (fs.existsSync(productsDataPath)) {
    const content = fs.readFileSync(productsDataPath, 'utf8');
    imageFiles.forEach(image => {
      if (content.includes(image)) {
        usedImages.add(image);
      }
    });
}

const unusedImages = imageFiles.filter(image => !usedImages.has(image));

console.log('--- Used Images ---');
usedImages.forEach(img => console.log(img));
console.log('\n--- Unused Images ---');
unusedImages.forEach(img => console.log(img));
