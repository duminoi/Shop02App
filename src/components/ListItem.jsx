import React, { useEffect } from "react";
import { useDispatch, useSelector } from "../store/hook";
import accounting from "accounting";
import { json, useNavigate } from "react-router-dom";
export default function ListItem({ _id, name, price, image }) {
  const detail = useSelector((state) => state.details);
  const productList = useSelector((state) => state.productList);
  const cart = useSelector((state) => state.cart);
  console.log(cart);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleDetails = (e) => {
    const id = e.target.dataset.id;
    productList.forEach((item) => {
      if (item._id === id) {
        // console.log(item);
        dispatch({ type: "details/get", payload: item });
        dispatch({ type: "loading", payload: true });
        navigate(`/details/${id}`);
        dispatch({ type: "loading", payload: false });
      }
    });
  };
  const handleCart = (e) => {
    const id = e.target.dataset.id;
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
          dispatch({ type: "toastContent", payload: "idle" });
          dispatch({ type: "toast", payload: `${item.name} is added` });
        } else {
          const newCart = [...cart];
          newCart[index].count += 1;
          localStorage.setItem("cart", JSON.stringify(newCart));
          dispatch({ type: "toastContent", payload: "idle" });
          dispatch({ type: "toast", payload: `${item.name} is added` });
        }
      }
    });
    console.log(index);
  };
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div
      id="flex-item"
      className="w-[22%] max-[450px]:w-[90%]  max-[650px]:w-[50%] max-[992px]:w-[40%] max-[1250px]:w-[30%] "
    >
      <div
        onClick={(e) => {
          handleDetails(e);
        }}
        id="product-head"
        data-id={_id}
      >
        <img
          src={image}
          alt="6551a7297f15f9c0a42d1e6c image"
          onClick={(e) => {
            handleDetails(e);
          }}
          data-id={_id}
        />
        <h2>{name}</h2>
      </div>
      <div id="product-info">
        <h2 className="max-[900px]:mt-0 text-2xl">
          <span id="dolar-span">$</span>
          {accounting.formatMoney(price, "", 0)}
        </h2>
        <div
          onClick={(e) => {
            handleCart(e);
          }}
          data-id={_id}
          id="shopping-cart"
        >
          <svg
            data-id={_id}
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 256 256"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M222.14,58.87A8,8,0,0,0,216,56H54.68L49.79,29.14A16,16,0,0,0,34.05,16H16a8,8,0,0,0,0,16h18L59.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42A27.75,27.75,0,0,0,152,204a28,28,0,1,0,28-28H83.17a8,8,0,0,1-7.87-6.57L72.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,222.14,58.87ZM96,204a12,12,0,1,1-12-12A12,12,0,0,1,96,204Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,192,204Zm4-74.57A8,8,0,0,1,188.1,136H69.22L57.59,72H206.41Z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}
