import React from "react";
import styles from "./SortList.module.css";

function SortList({ addList }) {
  return (
    <ul className={styles.ul}>
      {addList.map((elem) => {
        return (
          <div key={Math.random(elem.id)}>
            <li className={styles.li}>
              {elem.name} ({elem.age} years old)
            </li>
          </div>
        );
      })}
    </ul>
  );
}

export default SortList;
