
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Policy from './Pages/Policy';
import Pagenotfound from './Pages/Pagenotfound';
import Register from './Pages/Auth/Register';
import Login from './Pages/Auth/Login';
import Dashboard from './Pages/user/Dashboard';
import PrivateRoute from './components/Routes/Private';
import ForgotPasssword from './Pages/Auth/ForgotPassword';
import AdminRoute from './components/Routes/AdminRoute';
import AdimnDashboard from './Pages/Admin/AdimnDashboard';
import CreateCategory from './Pages/Admin/CreateCategory';
import CreateProduct from './Pages/Admin/CreateProduct';
import Users from './Pages/Admin/Users';
import Orders from './Pages/user/Orders';
import Profile from './Pages/user/Profile';
import Products from './Pages/Admin/Products';
import UpdateProduct from './Pages/Admin/UpadateProduct';
import Search from './Pages/Search';
import ProductDetails from './Pages/ProductDetails';
import Categories from './Pages/Categories';
import CategoryProduct from './Pages/CategoryProduct';
import CartPage from './Pages/CartPages';
import AdminOrders from './Pages/Admin/AdminOrder';
function App() {
  return (
    <>
  <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/product/:slug' element={<ProductDetails/>}/>
    <Route path='/categories' element={<Categories/>}/>
    <Route path='/cart' element={<CartPage/>}/>
    <Route path='/category/:slug' element={<CategoryProduct/>}/>
    <Route path='/search' element={<Search/>}/>
    <Route path='/dashboard' element={<PrivateRoute/>}>
    <Route path="user" element={<Dashboard/>}/>
    <Route path="user/orders" element={<Orders/>}/>
    <Route path="user/profile" element={<Profile/>}/>
    </Route>
    <Route path='/dashboard' element={<AdminRoute/>}>
    <Route path="admin" element={<AdimnDashboard/>}/>
    <Route path="admin/create-category" element={<CreateCategory/>}/>
    <Route path="admin/create-product" element={<CreateProduct/>}/>
    <Route path="admin/product/:slug" element={<UpdateProduct/>}/>
    <Route path="admin/products" element={<Products/>}/>
    <Route path="admin/users" element={<Users/>}/>
    <Route path="admin/orders" element={<AdminOrders/>}/>
    </Route>
    <Route path='/register' element={<Register/>}/>
    <Route path='/forgot-password' element={<ForgotPasssword/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/policy' element={<Policy/>}/>
    <Route path='*' element={<Pagenotfound/>}/>




  </Routes>
 
    
    
     
    </>
  );
}

export default App;
