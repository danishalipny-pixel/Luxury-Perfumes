# System Architecture — NOIRÉLLE

```mermaid
flowchart TD
    Client[Client Web Browser] --> Router[React Router v7 / SPA Engine]
    
    subgraph State Management
        CartCtx[CartContext / LocalStorage]
        WishCtx[WishlistContext / LocalStorage]
    end
    
    subgraph UI Presentation Layer
        PageLayout[PageLayout & Dynamic Theme Injector]
        Nav[Sticky Navbar & Search Drawer]
        Drawer[Slide-over Cart Drawer]
        QuickView[QuickViewModal Portal]
    end
    
    subgraph Route Destinations
        Home[HomePage / Curated Collections]
        Shop[ShopPage / Dynamic Multi-Filter Engine]
        Cols[Collection Views / Men, Women, Unisex, Oud, Gifts]
        Prod[ProductDetailsPage / 22 Dynamic Slugs]
        Cart[Cart & Checkout Workflow]
    end
    
    subgraph Data & Assets
        ProdData[Centralized Product Catalog - products.ts]
        ColData[Collection Metadata - collections.ts]
        Media[Public Image Architecture - products, gift-sets, hero]
    end
    
    Router --> PageLayout
    PageLayout --> Nav
    PageLayout --> Home
    PageLayout --> Shop
    PageLayout --> Cols
    PageLayout --> Prod
    PageLayout --> Cart
    
    Home & Shop & Cols & Prod --> CartCtx
    Home & Shop & Cols & Prod --> WishCtx
    CartCtx --> Drawer
    Shop & Cols --> QuickView
    
    ProdData --> Shop & Cols & Prod
    ColData --> Home & Cols
    Media --> UI Presentation Layer
```

## Component Hierarchy & Design Patterns
- **Atomic Components:** Reusable buttons, badges, typography primitives, and modal overlays.
- **Compound Feature Components:** `ProductCard`, `CartDrawer`, `QuickViewModal`, and `BrandStory`.
- **Context Providers:**
  - `CartContext`: Manages item additions, size variations, quantity recalculations, subtotal/tax computing, and WhatsApp order manifest construction.
  - `WishlistContext`: Manages saved items and synchronized badge counts.
- **Dynamic Routing:** Parametric routing via `/product/:slug` resolving against typed records in `PRODUCTS`.
