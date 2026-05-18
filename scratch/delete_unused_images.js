const fs = require('fs');
const path = require('path');

const unusedImages = [
  'blueprint-watermark.png',
  'classic-bg.png',
  'cta-bg.png',
  'd.jpg',
  'giesta-detail.png',
  'giesta-studio.png',
  'hero-windows-v.png',
  'hero-windows.png',
  'hero-windows.webp',
  'interior_fixed_divider_1778838654472.png',
  'interior_hanging_onwall_1778838671346.png',
  'interior_sliding_partition_1778838637663.png',
  'product-doors.png',
  'product-kitchen.png'
];

const publicImagesDir = path.join(process.cwd(), 'public', 'images');

unusedImages.forEach(image => {
  const filePath = path.join(publicImagesDir, image);
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
    console.log(`Deleted: ${image}`);
  } else {
    console.log(`Not found: ${image}`);
  }
});
