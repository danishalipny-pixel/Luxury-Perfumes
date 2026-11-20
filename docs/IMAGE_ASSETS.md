# Image Asset Architecture — NOIRÉLLE

## Directory Structure
The media assets of the project are arranged into clear semantic categories within `public/images/`:

```
public/images/
├── banners/          # Panoramic collection & seasonal marketing banners
├── campaigns/        # Flagship editorial campaign assets
├── categories/       # Olfactory family cards (woody, floral, oriental, fresh, etc.)
├── collections/      # Realm hero headers (men, women, unisex, oud, gift-sets, luxury)
├── hero/             # Cinematic landing hero compositions
├── logo/             # Scalable vector brand marks & emblems (dark, gold, ivory)
├── products/         # Primary & macro flacon imagery (13 bespoke + 5 curated)
│   └── gift-sets/    # Dedicated luxury presentation coffrets & discovery sets
└── social/           # High-resolution Open Graph / WhatsApp preview imagery
```

## Image Standards & Formatting
1. **Aspect Ratios:**
   - Flacon Product Media: Standardized 3:4 or 4:5 portrait aspect ratio.
   - Collection Banners: 16:10 / 16:9 widescreen format (1600x1000 or 1600x800).
   - Hero Banners: Ultra-widescreen cinematic 16:9 format (1920x1080).
2. **Display Constraints:**
   - Product cards, detail galleries, and shopping cart thumbnails enforce `object-fit: contain` with padding to ensure complete visibility of atomizers and champagne-gold caps without cropping.
   - Banners and editorial spreads enforce `object-fit: cover` to provide full-bleed visual immersion.
3. **Optimizations:**
   - Image assets are stored in high-density JPEG formats with 90–95% perceptual quality weighting, ensuring fast load times and clean rendering across Retina and High-DPI displays.
