// import React from "react";
import { useDispatch, useSelector } from "react-redux";
export default function Counter() {
  const count = useSelector((state) => state.count);
  console.log("vào Counter");

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch({ type: "count/plus" });
  };
  return (
    <div className="mt-[5rem]">
      <button onClick={handleClick}>Click me</button>
      <h1>Count: {count}</h1>
    </div>
  );
}
