import React from "react";
import SortItem from "../sortItem/SortItem";
import styles from "./SortForm.module.css";

function SortForm({ addNevExpenseHandler }) {
  return (
    <div className={styles.sortForm_conteiner}>
      <SortItem addNevExpenseHandler={addNevExpenseHandler} />
    </div>
  );
}

export default SortForm;
