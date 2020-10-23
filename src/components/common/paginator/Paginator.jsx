import React from "react";
import s from "./Paginator";

let Paginator = ({
  totalCardsCount,
  pageSize,
  onPageChanged,
  currentPage,
  portionSize = 6
}) => {
  let pagesCount = Math.ceil(totalCardsCount / pageSize);
  let pages = [];


}


export default Paginator;