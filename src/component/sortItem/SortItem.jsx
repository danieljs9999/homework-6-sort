import React, { useState } from "react";
import Input from "../UI/input/Input";

function SortItem({ addNevExpenseHandler }) {
  const [name, setname] = useState("");
  const [age, setAge] = useState("");

  const style = {
    marginTop: "-5px",
  };

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
        style={style}
      />
      <Input
        type={"number"}
        value={age}
        title={`Age (Years)`}
        onChange={userageInput}
      />

      <button className="button" disabled={!disabled} onClick={add}>
        Add User
      </button>
    </div>
  );
}

export default SortItem;
