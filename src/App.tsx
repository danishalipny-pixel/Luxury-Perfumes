import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import { LuxuryLoader } from './components/common/LuxuryLoader';

// Lazy Loaded Pages
const HomePage = lazy(() => import('./pages/Home/HomePage').then((m) => ({ default: m.HomePage })));
const ShopPage = lazy(() => import('./pages/Shop/ShopPage').then((m) => ({ default: m.ShopPage })));
const MenPage = lazy(() => import('./pages/Collections/MenPage').then((m) => ({ default: m.MenPage })));
const WomenPage = lazy(() => import('./pages/Collections/WomenPage').then((m) => ({ default: m.WomenPage })));
const UnisexPage = lazy(() => import('./pages/Collections/UnisexPage').then((m) => ({ default: m.UnisexPage })));
const OudPage = lazy(() => import('./pages/Collections/OudPage').then((m) => ({ default: m.OudPage })));
const LuxuryPage = lazy(() => import('./pages/Collections/LuxuryPage').then((m) => ({ default: m.LuxuryPage })));
const GiftSetsPage = lazy(() => import('./pages/Collections/GiftSetsPage').then((m) => ({ default: m.GiftSetsPage })));
const ProductDetailsPage = lazy(() => import('./pages/ProductDetails/ProductDetailsPage').then((m) => ({ default: m.ProductDetailsPage })));
const SearchResultsPage = lazy(() => import('./pages/Search/SearchResultsPage').then((m) => ({ default: m.SearchResultsPage })));
const WishlistPage = lazy(() => import('./pages/Wishlist/WishlistPage').then((m) => ({ default: m.WishlistPage })));
const CartPage = lazy(() => import('./pages/Cart/CartPage').then((m) => ({ default: m.CartPage })));
const CheckoutPage = lazy(() => import('./pages/Checkout/CheckoutPage').then((m) => ({ default: m.CheckoutPage })));
const OrderSuccessPage = lazy(() => import('./pages/OrderSuccess/OrderSuccessPage').then((m) => ({ default: m.OrderSuccessPage })));
const OrderTrackingPage = lazy(() => import('./pages/OrderTracking/OrderTrackingPage').then((m) => ({ default: m.OrderTrackingPage })));
const AboutPage = lazy(() => import('./pages/About/AboutPage').then((m) => ({ default: m.AboutPage })));
const ContactPage = lazy(() => import('./pages/Contact/ContactPage').then((m) => ({ default: m.ContactPage })));
const ShippingPolicyPage = lazy(() => import('./pages/Policies/ShippingPolicyPage').then((m) => ({ default: m.ShippingPolicyPage })));
const ReturnsPolicyPage = lazy(() => import('./pages/Policies/ReturnsPolicyPage').then((m) => ({ default: m.ReturnsPolicyPage })));
const PrivacyPolicyPage = lazy(() => import('./pages/Policies/PrivacyPolicyPage').then((m) => ({ default: m.PrivacyPolicyPage })));
const TermsPolicyPage = lazy(() => import('./pages/Policies/TermsPolicyPage').then((m) => ({ default: m.TermsPolicyPage })));
const AdminPage = lazy(() => import('./pages/Admin/AdminPage').then((m) => ({ default: m.AdminPage })));
const NotFoundPage = lazy(() => import('./pages/NotFound/NotFoundPage').then((m) => ({ default: m.NotFoundPage })));

export function App() {
  return (
    <Router>
      <CartProvider>
        <WishlistProvider>
          <Suspense fallback={<LuxuryLoader />}>
            <Routes>
              {/* 1. Home */}
              <Route path="/" element={<HomePage />} />

              {/* 2. Shop All */}
              <Route path="/shop" element={<ShopPage />} />

              {/* 3-8. Specialized Collections */}
              <Route path="/collections/men" element={<MenPage />} />
              <Route path="/collections/women" element={<WomenPage />} />
              <Route path="/collections/unisex" element={<UnisexPage />} />
              <Route path="/collections/oud" element={<OudPage />} />
              <Route path="/collections/luxury" element={<LuxuryPage />} />
              <Route path="/collections/gift-sets" element={<GiftSetsPage />} />

              {/* 9. Dynamic Product Details */}
              <Route path="/product/:slug" element={<ProductDetailsPage />} />

              {/* 10. Search Results */}
              <Route path="/search" element={<SearchResultsPage />} />

              {/* 11. Wishlist */}
              <Route path="/wishlist" element={<WishlistPage />} />

              {/* 12. Shopping Cart */}
              <Route path="/cart" element={<CartPage />} />

              {/* 13. Checkout */}
              <Route path="/checkout" element={<CheckoutPage />} />

              {/* 14. Order Confirmation / Success */}
              <Route path="/order-success/:orderId" element={<OrderSuccessPage />} />
              <Route path="/order-success" element={<OrderSuccessPage />} />

              {/* 15. Order Tracking */}
              <Route path="/order-tracking" element={<OrderTrackingPage />} />

              {/* 16. About Us */}
              <Route path="/about" element={<AboutPage />} />

              {/* 17. Contact Us */}
              <Route path="/contact" element={<ContactPage />} />

              {/* 18-21. Policies */}
              <Route path="/policies/shipping" element={<ShippingPolicyPage />} />
              <Route path="/policies/returns" element={<ReturnsPolicyPage />} />
              <Route path="/policies/privacy" element={<PrivacyPolicyPage />} />
              <Route path="/policies/terms" element={<TermsPolicyPage />} />

              {/* 22. Maison Admin Portal */}
              <Route path="/admin" element={<AdminPage />} />

              {/* 23. Custom 404 Page */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </WishlistProvider>
      </CartProvider>
    </Router>
  );
}

export default App;
