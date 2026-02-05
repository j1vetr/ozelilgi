import sharp from 'sharp';
import { readdir } from 'fs/promises';
import { existsSync, statSync } from 'fs';
import path from 'path';

const IMAGES_DIR = './public/images';

async function optimizeExisting() {
  console.log('Optimizing existing images...\n');

  const files = await readdir(IMAGES_DIR);
  const jpgFiles = files.filter(f => f.endsWith('.jpg'));

  for (const file of jpgFiles) {
    const filePath = path.join(IMAGES_DIR, file);
    const stats = statSync(filePath);
    
    if (stats.size > 150000) {
      try {
        const tempPath = filePath + '.temp';
        
        await sharp(filePath)
          .resize(1200, 800, {
            fit: 'inside',
            withoutEnlargement: true
          })
          .jpeg({
            quality: 80,
            progressive: true
          })
          .toFile(tempPath);

        const newStats = statSync(tempPath);
        const reduction = ((1 - newStats.size / stats.size) * 100).toFixed(1);
        
        await import('fs').then(fs => {
          fs.unlinkSync(filePath);
          fs.renameSync(tempPath, filePath);
        });
        
        console.log(`✅ ${file} - ${(newStats.size / 1024).toFixed(0)}KB (${reduction}% smaller)`);
      } catch (error) {
        console.error(`❌ Error processing ${file}:`, error.message);
      }
    } else {
      console.log(`⏭️  ${file} - already optimized (${(stats.size / 1024).toFixed(0)}KB)`);
    }
  }

  console.log('\n✨ All images optimized!');
}

optimizeExisting();
