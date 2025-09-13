import { useState } from "react";
import SearchBar from "../components/MenuBar";
import ProductList from "../components/ProductList";
import { BasicBase } from "../style/common.styled";




export default function SearchPage() {

  return (
    <BasicBase>
      <ProductList/>
    </BasicBase>
  );
}
