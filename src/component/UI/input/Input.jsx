import React from "react";
import "./Input.css";

function Input({ id, type, title, value, onChange, style }) {
  return (
    <form className="form">
      <label style={style} id={id}>{title}</label>
      <input type={type} name={id} onChange={onChange} value={value} required/>
    </form>
  );
}

export default Input;
