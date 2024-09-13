import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import accounting from "accounting";
export default function CartItem({
  _id,
  brand,
  image,
  name,
  quantity,
  price,
  count,
}) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const handlePlus = (e) => {
    const id = e.target.dataset.id;
    console.log(id);
    const index = cart.findIndex((item) => item._id === id);
    if (index >= 0) {
      const newCart = [...cart];
      newCart[index].count += 1;
      dispatch({ type: "cart/update", payload: newCart });
    }
  };
  const handleMinus = (e) => {
    const id = e.target.dataset.id;
    console.log(id);
    const index = cart.findIndex((item) => item._id === id);
    console.log("index", index);

    if (index >= 0) {
      // nếu mà sản phẩm được click có trong giỏ hàng
      if (cart[index].count >= 1) {
        // giảm số lượng khi count > 1
        if (cart[index].count == 1) {
          // nếu count = 1 thì sẽ xóa sản phẩm đó khỏi giỏ hàng
          const newCart = cart.filter((item) => {
            return item._id !== id;
          });
          dispatch({ type: "cart/update", payload: newCart });
          console.log("vào đây");
          return;
        }
        const newCart = [...cart];
        newCart[index].count -= 1;
        console.log(newCart[index].count);
        dispatch({ type: "cart/update", payload: newCart });
      }
    }
  };
  const handleDelete = (e) => {
    const id = e.target.dataset.id;
    console.log(id);
    const newCart = cart.filter(({ _id }) => _id !== id);
    localStorage.setItem("cart", JSON.stringify(newCart));
    dispatch({ type: "cart/update", payload: newCart });
  };
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  return (
    <div id="single-cart-container" className="">
      <img src={image} alt="product image"></img>
      <div id="details">
        <div className="flex">
          <div id="brand" className="text-[#9d174d] text-xl">
            {brand}
          </div>
          <div id="title" className="ml-2 text-xl">
            {name}
          </div>
        </div>
        <p className="price text-[1.6rem] font-[500] ">
          <span className="text-[#9d174d]">$</span>
          {accounting.formatMoney(price, "", 0)}
        </p>
        <p>Còn lại: {quantity - count}</p>
      </div>
      <div id="edit">
        <div
          data-id={_id}
          id="minus"
          onClick={handleMinus}
          className="text-[#9d174d] cursor-pointer"
        >
          -
        </div>
        <div id="quantity">{count}</div>
        <div data-id={_id} id="plus" onClick={handlePlus}>
          +
        </div>
      </div>
      <div id="price">
        <span id="dolar-span">$</span>
        <span id="price-span">
          {" "}
          {accounting.formatMoney(price * count, "", 0)}
        </span>
        <span data-id={_id} onClick={handleDelete} id="trash-icon">
          <svg
            data-id={_id}
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 448 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              data-id={_id}
              d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"
            ></path>
          </svg>
        </span>
      </div>
    </div>
  );
}
