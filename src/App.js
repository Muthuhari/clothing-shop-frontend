import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useSelector } from 'react-redux';
import NewProduct from './pages/NewProduct';
import ProductPage from './pages/ProductPage';
import CategoryPage from './pages/CategoryPage';
import ScrollToTop from './components/ScrollToTop';
import CartPage from './pages/CartPage';
import OrdersPage from './pages/OrdersPage';
import AdminDashboard from './pages/AdminDashboard';
import Contacts from './pages/Contacts';

function App() {
  const user =useSelector((state) => state.user);
  return (
    <div className="App">
      <BrowserRouter>
      <ScrollToTop />
      <Navigation />
      <Routes>
        <Route index element={<Home />} />
                    {!user && (
                        <>
                            <Route path="/login" element={<Login />} />
                            <Route path="/signup" element={<Signup />} />
                        </>
                    )}
                    {user && (
                        <>
                            <Route path="/cart" element={<CartPage />} />
                            <Route path="/orders" element={<OrdersPage />} />
                          
                        </>
                    )}
                    {user && user.isAdmin &&(
                      <>
                      <Route path="/admin" element={<AdminDashboard />} />
                      </>
                    )}
                     <Route path="/new-product" element={<NewProduct />} />
                     <Route path="/category/:category" element={<CategoryPage />} />
                     <Route path="/contacts" element={<Contacts />} />
                     <Route path="/product/:id" element={<ProductPage />} />
                     <Route path="*" element={<Home />} />

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


