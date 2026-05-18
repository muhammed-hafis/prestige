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

const colorMap = [
  { from: /#475569/gi, to: '#B8902A' }, // Slate to Gold
  { from: /#f1f3f5/gi, to: '#fdf8e1' }, // Aluminium Gray to Light Gold
  { from: /#e2e8f0/gi, to: '#f9f4e8' }, // Secondary Aluminium Gray to Secondary Gold
  { from: /#111827/gi, to: '#1a1a1a' }, // Dark Steel to Dark Gray
];

walk(targetDir, (filePath) => {
  if (filePath.endsWith('.jsx') || filePath.endsWith('.js') || filePath.endsWith('.css')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    colorMap.forEach(pair => {
      content = content.replace(pair.from, pair.to);
    });

    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Reverted colors: ${filePath}`);
    }
  }
});
