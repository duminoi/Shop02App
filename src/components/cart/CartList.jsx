import React, { useEffect, useState } from "react";
import "../../assets/css/cart/cart.css";
import CartItem from "./CartItem";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "../../store/hook";
// import { useSelector } from "../../store/hook";
export default function CartList() {
  const totalPrice = useSelector((state) => state.totalPrice);
  const dispatch = useDispatch();
  // const cart = useSelector((state) => state.cart);
  let cart = JSON.parse(localStorage.getItem("cart"));
  // cart.forEach(({ price, count }) =>
  //   dispatch({ type: "totalPrice", payload: price * count })
  // );
  // useEffect(() => {

  // }, [cart]);
  return (
    <div>
      <div className="mt-[6rem] mb-11 flex justify-center flex-col items-center">
        <h1 className="mt-[4rem] text-4xl tracking-wide font-[700] mb-[2rem]">
          SHOPPING CART
        </h1>
        {cart.map((item) => {
          return <CartItem key={item._id} {...item}></CartItem>;
        })}
        <div id="total-price-div">
          <span id="left">Total Price: </span>
          <span id="dolar">$</span>
          <span id="right">{totalPrice}</span>
        </div>
        <div className="row w-full justify-content-center">
          <div className="col-8 row btn-group absolute">
            <button className="btn absolute col-4 btn-warning">Go home</button>
            <button className="btn btn-success absolute col-8">
              Check out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
