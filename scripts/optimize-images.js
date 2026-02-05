import sharp from 'sharp';
import { readdir, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

const SOURCE_DIR = './attached_assets';
const OUTPUT_DIR = './public/images';

const NEW_IMAGES = {
  'CM8A5657_1770296832095.jpg': 'classroom-green-new-1.jpg',
  'CM8A5659_1770296832096.jpg': 'classroom-green-new-2.jpg',
  'CM8A5661_1770296832096.jpg': 'classroom-green-new-3.jpg',
  'CM8A5663_1770296832097.jpg': 'classroom-green-new-4.jpg',
  'CM8A5670_1770296832097.jpg': 'classroom-orange-blue.jpg',
  'CM8A5678_1770296832098.jpg': 'staircase-safety.jpg',
  'CM8A5685_1770296832098.jpg': 'kindergarten-blue-1.jpg',
  'CM8A5687_1770296832099.jpg': 'kindergarten-blue-2.jpg',
  'CM8A5695_1770296832099.jpg': 'wall-art-numbers.jpg',
  'CM8A5712_1770296832099.jpg': 'kindergarten-orange-1.jpg',
  'CM8A5714_1770296832099.jpg': 'kindergarten-orange-2.jpg',
  'CM8A5716_1770296832100.jpg': 'kindergarten-orange-3.jpg',
  'CM8A5720_1770296832100.jpg': 'wall-art-caterpillar.jpg',
  'CM8A5724_1770296832101.jpg': 'kindergarten-orange-full.jpg',
  'CM8A5733_1770296832101.jpg': 'hallway-mural.jpg',
  'CM8A5736_1770296832101.jpg': 'kindergarten-cabinets.jpg',
  'CM8A5754_1770296832101.jpg': 'playroom-ballpit-1.jpg',
  'CM8A5756_1770296832102.jpg': 'playroom-ballpit-2.jpg',
  'CM8A5760_1770296832102.jpg': 'wall-art-spongebob.jpg',
  'CM8A5762_1770296832102.jpg': 'kindergarten-colorful.jpg'
};

async function optimizeImages() {
  if (!existsSync(OUTPUT_DIR)) {
    await mkdir(OUTPUT_DIR, { recursive: true });
  }

  console.log('Starting image optimization...\n');

  for (const [sourceFile, outputFile] of Object.entries(NEW_IMAGES)) {
    const sourcePath = path.join(SOURCE_DIR, sourceFile);
    const outputPath = path.join(OUTPUT_DIR, outputFile);

    if (!existsSync(sourcePath)) {
      console.log(`⚠️  Skipping ${sourceFile} - file not found`);
      continue;
    }

    try {
      const originalStats = await sharp(sourcePath).metadata();
      
      await sharp(sourcePath)
        .resize(1200, 800, {
          fit: 'inside',
          withoutEnlargement: true
        })
        .jpeg({
          quality: 80,
          progressive: true
        })
        .toFile(outputPath);

      const stats = await import('fs').then(fs => fs.statSync(outputPath));
      const originalSize = await import('fs').then(fs => fs.statSync(sourcePath).size);
      const reduction = ((1 - stats.size / originalSize) * 100).toFixed(1);
      
      console.log(`✅ ${outputFile} - ${(stats.size / 1024).toFixed(0)}KB (${reduction}% smaller)`);
    } catch (error) {
      console.error(`❌ Error processing ${sourceFile}:`, error.message);
    }
  }

  console.log('\n✨ Image optimization complete!');
}

optimizeImages();
