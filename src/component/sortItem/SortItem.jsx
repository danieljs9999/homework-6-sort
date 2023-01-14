import React, { useState } from "react";
import Input from "../UI/input/Input";
import styles from "./SortItem.module.css";

function SortItem({ addNevExpenseHandler }) {
  const [name, setname] = useState("");
  const [age, setAge] = useState("");

  const disabled = name && age;

  const usernameInput = (event) => {
    setname(event.target.value);
  };

  const userageInput = (event) => {
    setAge(event.target.value);
  };

  const add = () => {
    if (disabled) {
      const userData = {
        name,
        age,
      };

      addNevExpenseHandler(userData);

      setname("");
      setAge("");
    }
  };

  return (
    <div>
      <Input
        type={"text"}
        title={"Username"}
        value={name}
        onChange={usernameInput}
        style={{ marginTop: "-5px" }}
      />
      <Input
        type={"number"}
        value={age}
        title={`Age (Years)`}
        onChange={userageInput}
      />

      <button className={styles.button} disabled={!disabled} onClick={add}>
        Add User
      </button>
    </div>
  );
}

export default SortItem;
