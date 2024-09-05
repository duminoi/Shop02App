import React from "react";
import "../assets/css/details.css";
import { useDispatch, useSelector } from "../store/hook";
import accounting from "accounting";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
export default function Details() {
  const detail = useSelector((state) => state.details);
  console.log("vào details");
  const cart = useSelector((state) => state.cart);
  const productList = useSelector((state) => state.productList);
  const dispatch = useDispatch();
  console.log(detail);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  const handleCart = (e) => {
    const id = detail._id;
    console.log(id);
    const index = cart.findIndex(({ _id }) => {
      return id == _id;
    });
    console.log(cart);
    productList.forEach((item) => {
      if (item._id === id) {
        if (index <= -1) {
          const newCart = { ...item, count: 1 };
          console.log(newCart);
          dispatch({ type: "cart/add", payload: newCart });
          // dispatch({ type: "toastContent", payload: "idle" });
          // dispatch({ type: "toast", payload: `${item.name} is added` });
          toast(`${item.name} is added`);
        } else {
          const newCart = [...cart];
          newCart[index].count += 1;
          localStorage.setItem("cart", JSON.stringify(newCart));
          // dispatch({ type: "toastContent", payload: "idle" });
          // dispatch({ type: "toast", payload: `${item.name} is added` });
          toast(`${item.name} is added`);
        }
      }
    });
    console.log(index);
  };
  return (
    <div id="single-product-container" className="mt-[4rem] container">
      <div className="row">
        <div className="flex-item col-6">
          <img src={detail.image} alt="product image" />
        </div>
        <div id="details" className="flex-item col-6">
          <h2 id="brand">{detail.brand}</h2>
          <h2 id="title">{detail.title}</h2>
          <h2 id="description">{detail.description}</h2>
          <span> category: {detail.category}</span>
          <button className="block" onClick={handleClick}>
            Go home
          </button>
          <div id="price-container">
            <h2 id="price">
              <span>$</span>
              {accounting.formatMoney(detail.price, "", 0)}
            </h2>
            <button onClick={handleCart}>Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
