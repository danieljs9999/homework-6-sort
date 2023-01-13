import { useState } from "react";
import "./App.css";
import SortForm from "./component/sortForm/SortForm";
import SortList from "./component/sortList/SortList";

function App() {
  const [addList, setAddList] = useState([
    { name: "Bayaman", age: 90, id: Math.random() },
    { name: "Zhumabek", age: 25, id: Math.random() },
    { name: "Nurbolot", age: 24, id: Math.random() },
  ]);

  addList.sort((b, a) => {
    return a.age - b.age
  })

  const addNevExpenseHandler = (data) => {
    const updatedExpenses = [...addList];
    updatedExpenses.push(data);
    setAddList(updatedExpenses);
  };

  return (
    <div className="App">
      <SortForm addNevExpenseHandler={addNevExpenseHandler} />
      <SortList addList={addList} />
    </div>
  );
}

export default App;
