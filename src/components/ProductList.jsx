import React, { useEffect } from "react";
import ListItem from "./ListItem";
import { useDispatch } from "../store/hook";
import { fetchProducts } from "../store/middlewares/fetchProducts";
import { useSelector } from "../store/hook";
export default function ProductList() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  // console.log(productList);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <div className="flex-col justify-content flex items-center mt-[5rem]">
      <h1 className="mx-auto text-4xl font-[600] py-[2rem]">PRODUCTS</h1>
      <div id="flex-container">
        {productList.map((item) => {
          return <ListItem key={item._id} {...item}></ListItem>;
        })}
      </div>
    </div>
  );
}
