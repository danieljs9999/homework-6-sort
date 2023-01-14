import React from "react";
import styles from "./Input.module.css";

function Input({ id, type, title, value, onChange, style }) {
  return (
    <form className={styles.form}>
      <label style={style} id={id}>
        {title}
      </label>
      <input type={type} name={id} onChange={onChange} value={value} required />
    </form>
  );
}

export default Input;
