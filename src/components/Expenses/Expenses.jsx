import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import React,{useState} from 'react';

// THE WHOLE CONCEPT HERE IS - TO PASS VALUE/DATA TO PARENT/CONTROL COMPONENT/EXPENSES
// AND THEN TO RECIEVE A REQUEST/FUNCTION THROUGH THE PROPS
// CONTROL COMPONENT - WHERE IS REACT'S LOGIC RESIDES

const Expenses = (props) => {
  //pointer to the '2011' where is setFilteredYear - is to Update that value     
  const [filteredYear, setFilteredYear] = useState('2021');//just to initialize

  // 1. creating method that update the year
  // 2. passing down to the Child - ExpenseFilter Comp as the value
  // 3. picking that Data from ExpenseFilter Comp through the props
  const filterChangeHandler = (selectedYear) =>{
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
      selected = {filteredYear} /* here we use 'selected param to set 2021' up - by default */
      onChangeFilter={filterChangeHandler}
      />

      {filteredExpenses.map((expense)=>(
        <ExpenseItem
          key = {expense.id}//allows React to identify unique item and prevent from overiding other 'smart/state' items
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
