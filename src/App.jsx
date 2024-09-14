import React, { useEffect } from "react";
import Header from "./components/Header";
import "./assets/css/App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import ProductList from "./components/ProductList";
import CartList from "./components/cart/CartList";
import Details from "./components/Details";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./components/Loading";
import Errors from "./pages/Errors";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  // console.log("vào App");
  const navigate = useNavigate();
  const detail = useSelector((state) => state.details);
  const page = useSelector((state) => state.page);

  const isLoading = useSelector((state) => {
    return state.isLoading;
  });
  useEffect(() => {
    navigate(`/products/page/${page}`);
  }, [page]);
  return (
    <div>
      <ToastContainer position="top-center" autoClose="1000" />
      <Header />
      <Routes>
        <Route path={`/products/page/:id`} element={<ProductList />} />
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
