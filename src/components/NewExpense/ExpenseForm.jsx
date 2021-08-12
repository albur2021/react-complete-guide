import React, { useState } from "react";

const ExpenseForm = (props) => {
    const titleChangeHandler =(event)=>{
      //1.by default JS will automatically create this command
      //document.getElementById('').addEventListener('click',(event)=>{});
      
      //2.here React provides 'event object with its properties to see user input in browser
      console.log(event.target.value);
    }


  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
