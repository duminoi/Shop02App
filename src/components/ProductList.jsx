import React, { useEffect } from "react";
import ListItem from "./ListItem";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../store/middlewares/fetchProducts";
import { useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
export default function ProductList() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  // console.log("vào productList");
  const totalPages = useSelector((state) => state.totalPages);

  const handlePageClick = ({ selected }) => {
    dispatch(fetchProducts(selected + 1));
  };

  useEffect(() => {
    dispatch(fetchProducts(1));
  }, []);
  return (
    <div className="flex-col justify-content flex items-center mt-[5rem]">
      <h1 className="mx-auto text-4xl font-[600] py-[2rem]">PRODUCTS</h1>
      <div id="flex-container">
        {productList.map((item) => {
          return <ListItem key={item._id} {...item}></ListItem>;
        })}
      </div>
      <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={totalPages}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </div>
  );
}
