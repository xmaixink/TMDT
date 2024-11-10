import "@fortawesome/fontawesome-free";
import '@fortawesome/fontawesome-free/css/all.min.css';
import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import AdminProduct from "./admin/AdminProduct";
import "./css/App.css";
import Login from "./pages/auth/Login/Login";
import Register from "./pages/auth/Register/Register";
import Cart from "./pages/Cart/Cart";
import ContactPage from "./pages/Contactpage/Contactpage";
import HomePage from "./pages/HomePage/HomePage";
import ProductDetail from "./pages/Product Detail/ProductDetail";
import ProductPage from "./pages/ProductPage/ProductPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contactpage" element={<ContactPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/adminprod" element={<AdminProduct />} />
      </Route>
    )
  );

  return (
    <div className="container">
      <div className="navbar"></div>

      <RouterProvider router={router} />
    </div>
  );
}

export default App;
