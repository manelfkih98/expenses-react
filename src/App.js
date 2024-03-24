
import ExpensesContainer from "./Components/ExpensesContainer";
import NewExpenses from "./Components/newExpenses";
import { useState } from "react";
function App() {

  const expensesData = [
    {
      id: 1,
      title: "Food",
      price: 5400,
      date: new Date(2024, 2, 9),
    },
    {
      id: 2,
      title: "New PC",
      price: 3000,
      date: new Date(2023, 7, 29),
    },
    {
      id: 3,
      title: "Education",
      price: 7200,
      date: new Date(2023, 9, 15),
    },
    {
      id: 4,
      title: "Voyage",
      price: 2500,
      date: new Date(2025, 3, 10),
    },
  ];
   const [update, setUpdate] = useState(expensesData);
  const getData = (x) => {
    setUpdate([x, ...update]);
  };
  return (
    <div>
      <NewExpenses getData={getData} />
      <ExpensesContainer expensesData={update} />
    </div>
  );
 
  
}
//blach pionteur
// filting props
//+ casting to number 
// "" to string
export default App;
