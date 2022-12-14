import { Routes, Route } from 'react-router-dom';

// COMPONENTS:
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';

// USER COMPONENTS:
import RouteWithUserChatComponent from './components/user/RouteWithUserChatComponent';

// PAGES:
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import ProductListPage from './pages/ProductListPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

// Protected User Pages
import ProtectedRoutesComponent from './components/ProtectedRouteComponent';
import UserOrdersPage from './pages/user/UserOrdersPage';
import UserOrderDetailsPage from './pages/user/UserOrderDetailsPage';
import UserProfilePage from './pages/user/UserProfilePage';
import UserCartDetailsPage from './pages/user/UserCartDetailsPage';

// Protected Admin Pages
import AdminUsersPage from './pages/admin/AdminUsersPage';
import AdminEditUserPage from './pages/admin/AdminEditUserPage';
import AdminProductsPage from './pages/admin/AdminProductsPage';
import AdminCreateProductPage from './pages/admin/AdminCreateProductPage';
import AdminEditProductPage from './pages/admin/AdminEditProductPage';
import AdminOrdersPage from './pages/admin/AdminOrdersPage';
import AdminOrderDetailsPage from './pages/admin/AdminOrderDetailsPage';
import AdminChatsPage from './pages/admin/AdminChatsPage';
import AdminAnalyticsPage from './pages/admin/AdminAnalyticsPage';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route element={<RouteWithUserChatComponent />}>
          {/* publicly available routes: */}
          <Route path="/" element={<HomePage />} />
          <Route path="/product-list" element={<ProductListPage />} />
          <Route path="/product-details" element={<ProductDetailsPage />} />
          <Route path="/product-details/:id" element={<ProductDetailsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={'Page does not exist'} />
        </Route>

        {/* USER PROTECTED ROUTES */}
        <Route element={<ProtectedRoutesComponent admin={false} />}>
          <Route path="/user" element={<UserProfilePage />} />
          <Route path="/user/my-orders" element={<UserOrdersPage />} />
          <Route path="/user/cart-details" element={<UserCartDetailsPage />} />
          <Route
            path="/user/order-details"
            element={<UserOrderDetailsPage />}
          />
        </Route>

        {/* ADMIN PROTECTED ROUTES */}
        <Route element={<ProtectedRoutesComponent admin={true} />}>
          <Route path="/admin/users" element={<AdminUsersPage />} />
          <Route path="/admin/edit-user" element={<AdminEditUserPage />} />
          <Route path="/admin/products" element={<AdminProductsPage />} />
          <Route
            path="/admin/create-new-product"
            element={<AdminCreateProductPage />}
          />
          <Route
            path="/admin/edit-product"
            element={<AdminEditProductPage />}
          />
          <Route path="/admin/orders" element={<AdminOrdersPage />} />
          <Route
            path="/admin/order-details"
            element={<AdminOrderDetailsPage />}
          />
          <Route path="/admin/chats" element={<AdminChatsPage />} />
          <Route path="/admin/analytics" element={<AdminAnalyticsPage />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
