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
  { from: /#B8902A/gi, to: '#475569' }, // Gold to Slate
  { from: /#c5a028/gi, to: '#475569' }, // Another Gold to Slate
  { from: /#fdf8e1/gi, to: '#f1f3f5' }, // Light Gold to Aluminium Gray
  { from: /#f9f7f0/gi, to: '#f1f3f5' }, // More muted Gold to Aluminium Gray
  { from: /#f5f4ef/gi, to: '#e2e8f0' }, // Secondary muted Gold to Secondary Aluminium Gray
  { from: /#fffaf0/gi, to: '#f1f3f5' },
  { from: /#f8f1e5/gi, to: '#e2e8f0' },
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
      console.log(`Updated colors: ${filePath}`);
    }
  }
});
