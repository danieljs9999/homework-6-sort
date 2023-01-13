import React from "react";
import SortItem from "../sortItem/SortItem";
import "./SortForm.css";

function SortForm({ addNevExpenseHandler }) {
  return (
    <div className="sortForm_conteiner">


      <SortItem addNevExpenseHandler={addNevExpenseHandler}/>

      
    </div>
  );
}

export default SortForm;
