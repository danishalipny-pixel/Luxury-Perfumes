import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const publicImagesDir = path.join(rootDir, 'public', 'images');

const directories = [
  'logo',
  'hero',
  'products',
  'collections',
  'categories',
  'banners',
  'campaigns',
  'social'
];

directories.forEach(dir => {
  const fullPath = path.join(publicImagesDir, dir);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
  }
});

// Curated high-res luxury perfume photography from Unsplash
const imagesToDownload = [
  // Hero & Campaigns
  {
    path: 'hero/hero-main.jpg',
    url: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=2000&q=85' // Luxury amber flacon on dark reflective stone
  },
  {
    path: 'hero/hero-secondary.jpg',
    url: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=2000&q=85' // Golden perfume mist flacon
  },
  {
    path: 'campaigns/campaign-craftsmanship.jpg',
    url: 'https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=1600&q=85' // Master artisan perfume compounding
  },
  {
    path: 'campaigns/campaign-signature.jpg',
    url: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1600&q=85' // Cinematic luxury gold perfume bottle
  },
  {
    path: 'banners/banner-oud.jpg',
    url: 'https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?auto=format&fit=crop&w=1600&q=85' // Dark smoky mystical oud ambiance
  },
  {
    path: 'banners/banner-gift.jpg',
    url: 'https://images.unsplash.com/photo-1512781476274-123485547432?auto=format&fit=crop&w=1600&q=85' // Luxury packaging and gift box ribbon
  },

  // Collections covers
  {
    path: 'collections/men-collection.jpg',
    url: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1200&q=85' // Midnight charcoal masculine aesthetic bottle
  },
  {
    path: 'collections/women-collection.jpg',
    url: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=1200&q=85' // Floral feminine luxury crystal bottle
  },
  {
    path: 'collections/unisex-collection.jpg',
    url: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=85' // Contemporary minimalist luxury perfume
  },
  {
    path: 'collections/oud-collection.jpg',
    url: 'https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&w=1200&q=85' // Deep amber oud bottle with golden cap
  },
  {
    path: 'collections/gift-collection.jpg',
    url: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1200&q=85' // Luxury gift presentation box
  },
  {
    path: 'collections/luxury-collection.jpg',
    url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=85' // Haute parfumerie flacon
  },

  // Olfactory Families
  {
    path: 'categories/woody.jpg',
    url: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=600&q=80' // Woody cedar sandalwood
  },
  {
    path: 'categories/floral.jpg',
    url: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=600&q=80' // Blooming damask roses
  },
  {
    path: 'categories/oriental.jpg',
    url: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80' // Exotic incense & spices
  },
  {
    path: 'categories/fresh.jpg',
    url: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=600&q=80' // Fresh aquatic crisp citrus
  },
  {
    path: 'categories/amber.jpg',
    url: 'https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=600&q=80' // Rich warm golden resins
  },
  {
    path: 'categories/citrus.jpg',
    url: 'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=600&q=80' // Sunlit Italian bergamot & neroli
  },
  {
    path: 'categories/spicy.jpg',
    url: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80' // Saffron and black cardamom
  },
  {
    path: 'categories/musk.jpg',
    url: 'https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?auto=format&fit=crop&w=600&q=80' // Silken white musk & cashmeran
  },

  // Products (Each with high quality luxury perfume photography)
  {
    path: 'products/nocturne-santal-1.jpg',
    url: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1000&q=85'
  },
  {
    path: 'products/nocturne-santal-2.jpg',
    url: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1000&q=85'
  },
  {
    path: 'products/cuir-imperiale-1.jpg',
    url: 'https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?auto=format&fit=crop&w=1000&q=85'
  },
  {
    path: 'products/cuir-imperiale-2.jpg',
    url: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1000&q=85'
  },
  {
    path: 'products/vetiver-celeste-1.jpg',
    url: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1000&q=85'
  },
  {
    path: 'products/vetiver-celeste-2.jpg',
    url: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1000&q=85'
  },
  {
    path: 'products/ombre-sauvage-1.jpg',
    url: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=1000&q=85'
  },
  {
    path: 'products/ombre-sauvage-2.jpg',
    url: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1000&q=85'
  },
  {
    path: 'products/rose-velours-1.jpg',
    url: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=1000&q=85'
  },
  {
    path: 'products/rose-velours-2.jpg',
    url: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1000&q=85'
  },
  {
    path: 'products/soleil-blanc-1.jpg',
    url: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1000&q=85'
  },
  {
    path: 'products/soleil-blanc-2.jpg',
    url: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=1000&q=85'
  },
  {
    path: 'products/iris-sublime-1.jpg',
    url: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1000&q=85'
  },
  {
    path: 'products/iris-sublime-2.jpg',
    url: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1000&q=85'
  },
  {
    path: 'products/fleur-de-soie-1.jpg',
    url: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=1000&q=85'
  },
  {
    path: 'products/fleur-de-soie-2.jpg',
    url: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=1000&q=85'
  },
  {
    path: 'products/ambre-eternelle-1.jpg',
    url: 'https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&w=1000&q=85'
  },
  {
    path: 'products/ambre-eternelle-2.jpg',
    url: 'https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=1000&q=85'
  },
  {
    path: 'products/the-noir-29-1.jpg',
    url: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1000&q=85'
  },
  {
    path: 'products/the-noir-29-2.jpg',
    url: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1000&q=85'
  },
  {
    path: 'products/bois-d-argent-1.jpg',
    url: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1000&q=85'
  },
  {
    path: 'products/bois-d-argent-2.jpg',
    url: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1000&q=85'
  },
  {
    path: 'products/cypres-d-or-1.jpg',
    url: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1000&q=85'
  },
  {
    path: 'products/cypres-d-or-2.jpg',
    url: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1000&q=85'
  },
  {
    path: 'products/oud-royal-1.jpg',
    url: 'https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&w=1000&q=85'
  },
  {
    path: 'products/oud-royal-2.jpg',
    url: 'https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?auto=format&fit=crop&w=1000&q=85'
  },
  {
    path: 'products/oud-santal-1.jpg',
    url: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1000&q=85'
  },
  {
    path: 'products/oud-santal-2.jpg',
    url: 'https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=1000&q=85'
  },
  {
    path: 'products/sultan-oud-1.jpg',
    url: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1000&q=85'
  },
  {
    path: 'products/sultan-oud-2.jpg',
    url: 'https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&w=1000&q=85'
  },
  {
    path: 'products/ambre-oriental-1.jpg',
    url: 'https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=1000&q=85'
  },
  {
    path: 'products/ambre-oriental-2.jpg',
    url: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1000&q=85'
  },
  {
    path: 'products/noirelle-signature-1.jpg',
    url: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1000&q=85'
  },
  {
    path: 'products/noirelle-signature-2.jpg',
    url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=85'
  },
  {
    path: 'products/cristal-de-lune-1.jpg',
    url: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1000&q=85'
  },
  {
    path: 'products/cristal-de-lune-2.jpg',
    url: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=1000&q=85'
  },
  {
    path: 'products/coffret-royal-1.jpg',
    url: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1000&q=85'
  },
  {
    path: 'products/coffret-royal-2.jpg',
    url: 'https://images.unsplash.com/photo-1512781476274-123485547432?auto=format&fit=crop&w=1000&q=85'
  },
  {
    path: 'products/collection-decouverte-1.jpg',
    url: 'https://images.unsplash.com/photo-1512781476274-123485547432?auto=format&fit=crop&w=1000&q=85'
  },
  {
    path: 'products/collection-decouverte-2.jpg',
    url: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1000&q=85'
  },
  {
    path: 'products/duo-oud-1.jpg',
    url: 'https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&w=1000&q=85'
  },
  {
    path: 'products/duo-oud-2.jpg',
    url: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1000&q=85'
  },
  {
    path: 'products/trio-femme-1.jpg',
    url: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=1000&q=85'
  },
  {
    path: 'products/trio-femme-2.jpg',
    url: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1000&q=85'
  },

  // Social / Open Graph Image
  {
    path: 'social/og-noirelle.jpg',
    url: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&h=630&q=90'
  }
];

async function downloadImage(item) {
  const dest = path.join(publicImagesDir, item.path);
  if (fs.existsSync(dest) && fs.statSync(dest).size > 5000) {
    console.log(`Already exists: ${item.path}`);
    return;
  }
  
  try {
    const res = await fetch(item.url);
    if (!res.ok) {
      console.error(`Failed to download ${item.path}: HTTP ${res.status}`);
      return;
    }
    const buffer = Buffer.from(await res.arrayBuffer());
    fs.writeFileSync(dest, buffer);
    console.log(`Saved: ${item.path} (${buffer.length} bytes)`);
  } catch (err) {
    console.error(`Error downloading ${item.path}:`, err.message);
  }
}

async function main() {
  console.log(`Starting download of ${imagesToDownload.length} luxury perfume images...`);
  // Download with concurrency limit of 5
  for (let i = 0; i < imagesToDownload.length; i += 5) {
    const chunk = imagesToDownload.slice(i, i + 5);
    await Promise.all(chunk.map(downloadImage));
  }
  console.log('Finished downloading all perfume assets.');
}

main();
