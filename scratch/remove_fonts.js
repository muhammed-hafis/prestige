const fs = require('fs');
const path = require('path');

function walk(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
  });
}

const targetDir = path.join(process.cwd(), 'src');

const stylesToRemove = [
  /font-sans\s?/g,
  /font-serif\s?/g,
  /font-mono\s?/g,
  /font-bold\s?/g,
  /font-semibold\s?/g,
  /font-medium\s?/g,
  /font-light\s?/g,
  /font-thin\s?/g,
  /font-extrabold\s?/g,
  /italic\s?/g,
  /tracking-\[.*?\]\s?/g,
  /tracking-wider\s?/g,
  /tracking-widest\s?/g,
  /leading-\[.*?\]\s?/g,
  /leading-relaxed\s?/g,
  /leading-tight\s?/g,
  /leading-none\s?/g,
];

walk(targetDir, (filePath) => {
  if (filePath.endsWith('.jsx') || filePath.endsWith('.js')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    
    stylesToRemove.forEach(re => {
      content = content.replace(re, '');
    });

    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated: ${filePath}`);
    }
  }
});
