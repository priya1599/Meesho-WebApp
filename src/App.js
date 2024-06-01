
import Home from './pages/Home';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  } from "react-router-dom";
import { productsData } from './api/api';
import SearchProducts from './pages/SearchProducts';
import Login from './pages/Login';
import "react-toastify/dist/ReactToastify.css";
import Register from './pages/Register';
import AddToCart from './pages/AddToCart';
import Payment from './pages/Payment';
import Product from './pages/Product';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route path='/' element={<Home/>} loader={productsData}></Route> {/*giving default path to home page*/}
    <Route path='/Login' element={<Login/>}></Route>
    <Route path='/Register' element={<Register/>}></Route>
    <Route path="/product/:id" element={<SearchProducts/>} loader={productsData}></Route>
    <Route path='/AddToCart' element={<AddToCart/>}></Route>
    <Route path='/payment' element={<Payment/>}></Route>
    <Route path='/Product' element={<Product/>} loader={productsData}></Route>
  </Route>
  ))

  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
