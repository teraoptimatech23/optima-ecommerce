import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Login from './pages/auth/Login/Login'
import Register from './pages/auth/Register/Register'
import Home from './pages/home/Home/Home'
import ProductsPage from './pages/product/ProductsPage/ProductsPage'
import ProductDetail from './pages/product/ProductDetail/ProductDetail'
import Cart from './pages/cart/Cart/Cart'
import Summary from './pages/checkout/Summary/Summary'
import Checkout from './pages/checkout/Checkout/Checkout'
import Payment from './pages/checkout/Payment/Payment'
import HistoryTransaction from './pages/profile/HistoryTransaction/HistoryTransaction'
import Profile from './pages/profile/Profile/Profile'
import Learning from './pages/learning/Learning/Learning'
import Placeholder from './pages/placeholder/Placeholder/Placeholder'
import NotFound from './pages/notFound/NotFound/NotFound'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      {/* Single entry point for all product discovery — filters are query
          params (?category=, ?search=, ?sort=, ...), not separate routes. */}
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/products/:id" element={<ProductDetail />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/summary" element={<Summary />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/history" element={<HistoryTransaction />} />
      <Route path="/profile" element={<Profile />} />
      {/* Primary bottom-nav tab (replaces the old Wishlist tab) — see
          TASK-013. Course browsing/enrollment doesn't exist yet, so every
          drill-in destination below reuses the shared Placeholder page. */}
      <Route path="/learning" element={<Learning />} />
      <Route
        path="/learning/explore"
        element={<Placeholder title="Explore Courses" description="Course browsing is coming soon. Please check back in a future update." />}
      />
      <Route
        path="/learning/continue"
        element={<Placeholder title="Continue Learning" description="Your in-progress courses will show up here once this feature ships." />}
      />
      <Route
        path="/learning/recommended"
        element={<Placeholder title="Recommended for You" description="Personalized course recommendations are coming in a future update." />}
      />
      <Route
        path="/learning/courses/:id"
        element={<Placeholder title="Course" description="This course isn't available yet. Please check back in a future update." />}
      />
      {/* Not-yet-built screens all reuse the same Placeholder component with
          route-specific copy — see TASK-011. */}
      <Route
        path="/notifications"
        element={<Placeholder title="Notifications" description="Your notifications will show up here once this feature ships." />}
      />
      <Route
        path="/settings"
        element={<Placeholder title="Settings" description="Account and app settings are coming in a future update." />}
      />
      <Route
        path="/vouchers"
        element={<Placeholder title="Vouchers" description="Voucher and promo code management is currently under development." />}
      />
      <Route
        path="/reviews"
        element={<Placeholder title="Reviews" description="Product reviews are coming soon. Please check back in a future update." />}
      />
      <Route
        path="/address"
        element={<Placeholder title="Address Book" description="Manage your saved addresses here once this feature is available." />}
      />
      {/* Profile's account menu — see TASK-012. */}
      <Route
        path="/profile/personal-information"
        element={<Placeholder title="Personal Information" description="Editing your personal information is coming in a future update." />}
      />
      <Route
        path="/profile/payment-methods"
        element={<Placeholder title="Payment Methods" description="Managing saved payment methods is currently under development." />}
      />
      <Route
        path="/profile/security"
        element={<Placeholder title="Security" description="Password and security settings are coming in a future update." />}
      />
      <Route
        path="/profile/help-center"
        element={<Placeholder title="Help Center" description="Our help center is currently under development. Please check back soon." />}
      />
      {/* Profile's "My Orders" shortcuts — see TASK-012. */}
      <Route
        path="/orders/to-pay"
        element={<Placeholder title="To Pay" description="Orders awaiting payment will show up here once this feature ships." />}
      />
      <Route
        path="/orders/to-ship"
        element={<Placeholder title="To Ship" description="Orders being prepared for shipment will show up here once this feature ships." />}
      />
      <Route
        path="/orders/to-receive"
        element={<Placeholder title="To Receive" description="Orders on their way to you will show up here once this feature ships." />}
      />
      {/* Wildcard fallback — must stay last so it never shadows a real
          route. See docs/ROUTING.md. */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
)

export default App
