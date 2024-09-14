import React from "react";
import img01 from "../assets/img/icon.png";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useSelector, useStore } from "react-redux";
export default function Header() {
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const page = useSelector((state) => state.page);
  const handlClick = () => {
    console.log("vào header");
    navigate(`/products/page/${page}`);
  };
  return (
    <div className="bg-[#252b48] fixed top-0 left-0 w-full h-[5rem] z-[99]">
      <div
        onClick={handlClick}
        className="text-white text-[2.5rem] py-[.4rem] h-full px-[1.8rem]"
      >
        <img
          className="absolute top-[1.2rem] cursor-pointer"
          src={img01}
          id="icon-in-div"
          width="40"
        />
      </div>
      <svg
        onClick={() => {
          navigate("/cart");
        }}
        className="absolute top-[1.3rem] right-[2.6rem] text-white text-[2rem] align-middle"
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 16 16"
        id="hand-bag"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M8 1a2 2 0 0 1 2 2v2H6V3a2 2 0 0 1 2-2zm3 4V3a3 3 0 1 0-6 0v2H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11zm-1 1v1.5a.5.5 0 0 0 1 0V6h1.639a.5.5 0 0 1 .494.426l1.028 6.851A1.5 1.5 0 0 1 12.678 15H3.322a1.5 1.5 0 0 1-1.483-1.723l1.028-6.851A.5.5 0 0 1 3.36 6H5v1.5a.5.5 0 1 0 1 0V6h4z"></path>
      </svg>
      <div className="absolute top-[3.2rem] right-[1.6rem] text-white text-[1.5rem]">
        {cart.length > 0 ? (
          <span className="text-red-600 text-2xl">{cart.length}</span>
        ) : (
          cart.length
        )}
      </div>
    </div>
  );
}
