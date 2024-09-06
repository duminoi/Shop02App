import React, { useEffect } from "react";
import Header from "./components/Header";
import "./assets/css/App.css";
import { Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList";
import CartList from "./components/cart/CartList";
import Details from "./components/Details";
import { useDispatch, useSelector } from "./store/hook";
import Loading from "./components/Loading";
import Errors from "./pages/Errors";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Counter from "./components/Counter";

export default function App() {
  console.log("vào App");
  const detail = useSelector((state) => state.details);
  const isLoading = useSelector((state) => {
    return state.isLoading;
  });
  return (
    <div>
      <ToastContainer position="top-center" />
      <Header />
      {/* <Counter /> */}
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<CartList />} />
        {detail && detail._id && (
          <Route path={`/details/:id`} element={<Details />} />
        )}
        <Route path="*" element={<Errors />} />
      </Routes>
      {isLoading ? <Loading /> : ""}
    </div>
  );
}
