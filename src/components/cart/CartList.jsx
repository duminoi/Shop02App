import React, { useEffect, useState, useRef } from "react";
import "../../assets/css/cart/cart.css";
import CartItem from "./CartItem";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import accounting from "accounting";
// import { useSelector } from "../../store/hook";
export default function CartList() {
  const page = useSelector((state) => state.page);
  let totalPrice = 0;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let cart = useSelector((state) => state.cart);
  // console.log(cart);
  // // console.log("vào cartList");
  cart.forEach(({ price, count }) => {
    totalPrice += price * count;
    // console.log("totalPrice", totalPrice);
  });
  const handleDelete = () => {
    cart = [];
    toast("Checkout is completed");
    dispatch({ type: "cart/update", payload: cart });
  };
  const handleNavigate = () => {
    navigate(`/products/page/${page}`);
  };
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  return (
    <div>
      <div className="mt-[6rem] mb-11 flex justify-center flex-col items-center">
        <h1 className="mt-[4rem] text-4xl tracking-wide font-[700] mb-[2rem]">
          SHOPPING CART
        </h1>
        {cart.map((item) => {
          return <CartItem key={item._id} {...item}></CartItem>;
        })}
        {cart.length > 0 ? (
          <div id="total-price-div">
            <span id="left">Total Price: </span>
            <span id="dolar">$</span>
            <span id="right"> {accounting.formatMoney(totalPrice, "", 0)}</span>
          </div>
        ) : (
          <div className="text-4xl mb-5">
            Bạn không có sản phẩm nào trong giỏ hàng T-T
          </div>
        )}
        <div className="row w-full justify-content-center">
          <div className="col-8 row btn-group absolute">
            <button
              onClick={handleNavigate}
              className="btn absolute col-4 btn-warning"
            >
              Go home
            </button>
            {cart.length > 0 ? (
              <button
                onClick={handleDelete}
                className="btn btn-success absolute col-8"
              >
                Check out
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
