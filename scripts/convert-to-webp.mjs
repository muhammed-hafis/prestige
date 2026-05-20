/**
 * scripts/convert-to-webp.mjs
 *
 * Converts all AVIF frames in /public/animation/ to WebP.
 * WebP decodes ~2-3x faster than AVIF in browsers, which means smoother
 * playback during scroll — especially on mid-range mobile devices.
 *
 * The original AVIF files are kept as fallbacks (Hero.jsx tries WebP first,
 * falls back to AVIF automatically if a WebP file is missing).
 *
 * Usage:
 *   node scripts/convert-to-webp.mjs
 *
 * Requirements:
 *   npm install sharp   (already in your devDependencies)
 */

import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, basename, extname } from 'path';
import { fileURLToPath } from 'url';

const __dirname    = fileURLToPath(new URL('.', import.meta.url));
const animationDir = join(__dirname, '..', 'public', 'animation');

// ─── Settings ─────────────────────────────────────────────────────────────────
// quality 75 is the WebP sweet spot: visually identical to q60 AVIF but
// decodes 2-3x faster. Drop to 70 if you want smaller files.
const WEBP_QUALITY  = 75;

// How many frames to process in parallel.
// 8 is safe on most machines without thrashing the CPU.
const CONCURRENCY   = 8;
// ──────────────────────────────────────────────────────────────────────────────

const files  = await readdir(animationDir);
const inputs = files.filter(f => /\.avif$/i.test(f));

if (inputs.length === 0) {
  console.error('No .avif files found in', animationDir);
  process.exit(1);
}

console.log(`Converting ${inputs.length} AVIF frames → WebP (quality ${WEBP_QUALITY})...`);
console.log(`Concurrency: ${CONCURRENCY} parallel workers\n`);

let done   = 0;
let failed = 0;
let skipped = 0;

const convert = async (file) => {
  const inputPath  = join(animationDir, file);
  const outputName = basename(file, extname(file)) + '.webp';
  const outputPath = join(animationDir, outputName);

  // Skip if already converted and output is newer than input
  try {
    const [inStat, outStat] = await Promise.all([
      stat(inputPath),
      stat(outputPath),
    ]);
    if (outStat.mtimeMs >= inStat.mtimeMs) {
      skipped++;
      return;
    }
  } catch {
    // Output doesn't exist yet — proceed
  }

  try {
    await sharp(inputPath)
      .webp({
        quality:    WEBP_QUALITY,
        effort:     4,       // 0-6, higher = smaller file but slower conversion
        smartSubsample: true,
        nearLossless: false,
      })
      .toFile(outputPath);

    done++;
    if (done % 30 === 0 || done === inputs.length - skipped) {
      console.log(`  ✓ ${done + skipped}/${inputs.length} complete`);
    }
  } catch (err) {
    failed++;
    console.error(`  ✗ Failed: ${file} — ${err.message}`);
  }
};

// Process in batches of CONCURRENCY
for (let i = 0; i < inputs.length; i += CONCURRENCY) {
  await Promise.all(inputs.slice(i, i + CONCURRENCY).map(convert));
}

console.log(`\nDone!`);
console.log(`  Converted : ${done}`);
console.log(`  Skipped   : ${skipped} (already up to date)`);
console.log(`  Failed    : ${failed}`);

// Print size comparison for first 3 files as a sanity check
console.log('\nSize comparison (first 3 frames):');
for (const file of inputs.slice(0, 3)) {
  const avifPath = join(animationDir, file);
  const webpPath = join(animationDir, basename(file, '.avif') + '.webp');
  try {
    const [avifStat, webpStat] = await Promise.all([stat(avifPath), stat(webpPath)]);
    const ratio = ((1 - webpStat.size / avifStat.size) * 100).toFixed(1);
    const sign  = ratio >= 0 ? '-' : '+';
    console.log(
      `  ${file}: AVIF ${(avifStat.size/1024).toFixed(1)}KB → WebP ${(webpStat.size/1024).toFixed(1)}KB  (${sign}${Math.abs(ratio)}%)`
    );
  } catch {
    // skip
  }
}