import "./ExpensesContainer.css";
import ExpenseItem from "./ExpenseItem";
import ChartData from "./Chart/ChartData";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const ExpensesContainer = ({ expensesData }) => {
  const years = new Set(
    expensesData.map((item) => item.date.getFullYear()).sort()
  );
  const [selectedYear, setSelectedYear] = useState([...years][0]);
  console.log("ss", selectedYear);
  // true avec  ? :
  const filterexpenses=expensesData.filter((item)=>{return item.date.getFullYear()== selectedYear ||selectedYear=="all" })
  return (
    <div className="expenses">
      <ExpensesFilter setSelectedYear={setSelectedYear} years={[...years]} />
      <ChartData expensesData={filterexpenses} />
     
      {filterexpenses.map((expense) => {
       //  if (selectedYear==expense.date.getFullYear())
       //map et filter ta5ou fonction comme parametre
        return (
          <ExpenseItem
         
            title={expense.title}
            price={expense.price}
            date={expense.date}
          />
        );
      })}
    </div>
  );
};

export default ExpensesContainer;
