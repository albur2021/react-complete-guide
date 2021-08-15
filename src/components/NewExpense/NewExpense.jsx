import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
const NewExpense = (props) =>{    
  const saveExpenseDataHandler = (enteredExpenseData) =>{// pass args as an object to copy all data
    const expenseData = {
      ...enteredExpenseData,// copy all properties/key-values from Expense Form
      id: Math.random().toString()//creating a new id - property
    };
    //console.log(expenseData);

    //passed from App.js to add/gather a new generated Data
    //rendering a new Data up back to App.js 
    props.onAddExpense(expenseData);
  };

return(
  <div className="new-expense">
    <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
  </div>
  )
}


export default NewExpense;