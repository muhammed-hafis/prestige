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

const bgToReplace = [
  /bg-white/g,
  /bg-\[#fffaf0\]/g,
  /bg-\[#fdf8e6\]/g,
  /bg-\[#faf3e0\]/g,
];

walk(targetDir, (filePath) => {
  if (filePath.endsWith('.jsx') || filePath.endsWith('.js')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // We only replace if it's not a component that explicitly needs a different background
    // Hero components and Gallery usually have their own logic (bg-black or images)
    // We will skip files with 'bg-black' if it seems to be the main background
    if (content.includes('bg-black') && (filePath.includes('Hero') || filePath.includes('Gallery') || filePath.includes('CorporateProfile'))) {
      console.log(`Skipping black-themed section: ${filePath}`);
    } else {
      bgToReplace.forEach(re => {
        // We replace with transparent to let the layout background show through
        // but only if it's not part of a specific utility like 'bg-white/95' or 'bg-white rounded-xl'
        // For 'bg-white' by itself as a section background, we replace it.
        // For others, we might want to keep them if they are for cards.
        // Actually, the user wants the WHOLE page to be light gold.
        content = content.replace(re, 'bg-[var(--background)]');
      });
    }

    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated: ${filePath}`);
    }
  }
});
