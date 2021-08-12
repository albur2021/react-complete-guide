import "./ExpenseItem.css";
import "./ExpenseDate";
import ExpenseDate from "../Expenses/ExpenseDate";


import Card from '../UI/Card';
import React, {useState} from 'react';

const ExpenseItem = (props) => {
  

  console.log("ExpenseItem evaluated by React");


  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">{props.amount}</div>

    </Card>
  );
};

export default ExpenseItem;
