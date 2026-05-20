import sharp from 'sharp';
import { readdir, unlink } from 'fs/promises';
import { join, basename, extname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const animationDir = join(__dirname, '..', 'public', 'animation');

const files = await readdir(animationDir);
const images = files.filter(f => /\.(png|jpg|jpeg|webp)$/i.test(f));

console.log(`Found ${images.length} images to convert...`);

let done = 0;
let failed = 0;

await Promise.all(
  images.map(async (file) => {
    const inputPath = join(animationDir, file);
    const outputName = basename(file, extname(file)) + '.avif';
    const outputPath = join(animationDir, outputName);

    try {
      await sharp(inputPath)
        .avif({ quality: 60, effort: 5 })
        .toFile(outputPath);

      // Remove original after successful conversion
      await unlink(inputPath);

      done++;
      if (done % 20 === 0 || done === images.length) {
        console.log(`  ✓ ${done}/${images.length} converted`);
      }
    } catch (err) {
      failed++;
      console.error(`  ✗ Failed: ${file} — ${err.message}`);
    }
  })
);

console.log(`\nDone! ${done} converted, ${failed} failed.`);
