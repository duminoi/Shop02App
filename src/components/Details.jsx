import React from "react";
import "../assets/css/details.css";
import { useDispatch, useSelector } from "../store/hook";
import accounting from "accounting";
import { useNavigate } from "react-router-dom";
export default function Details() {
  const detail = useSelector((state) => state.details);
  const dispatch = useDispatch();
  console.log(detail);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
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
            <button>Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
