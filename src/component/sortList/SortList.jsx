import React from "react";
import "./SortList.css";

function SortList({ addList }) {
  return (
    <ul className="ul">
      {addList.map((elem) => {
        // console.log(elem);
        return (
          <div key={Math.random(elem.id)}>
            <li className="li">
              {elem.name} ({elem.age} years old)
            </li>
          </div>
        );
      })}
    </ul>
  );
}

export default SortList;
