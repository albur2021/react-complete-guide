import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import React,{useState} from 'react';

const Expenses = (props) => {
  //storing data 
  const [filteredYear, setFilteredYear] = useState('2021');//just to initialize
  const filterChangeHandler = selectedYear =>{
      setFilteredYear(selectedYear);
    // console.log("Expense.js");
    // console.log(selectedYear);
  };
  const filteredExpenses = props.items.filter(expense =>{
    return expense.date.getFullYear().toString() === filteredYear;
  });
  return (
    <div>
      <Card className="expenses">
      <ExpensesFilter 
      selected = {filteredYear} 
      onChangeFilter={filterChangeHandler}
      />

      {filteredExpenses.map((expense)=>(
        <ExpenseItem
          key = {expense.id}//allows React to identify unique item and prevent from overiding other 'smart/state' itemsç
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          />
      ))}
        
      </Card>
    </div>
  );
};

export default Expenses;
