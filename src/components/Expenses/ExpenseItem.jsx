import "./ExpenseItem.css";
import "./ExpenseDate";
import ExpenseDate from "../Expenses/ExpenseDate";


import Card from '../UI/Card';


const ExpenseItem = (props) => {
  

  console.log("ExpenseItem evaluated by React");

  // Here in this JSX - it's just shows as HTML Format 
  // before lifting this Child Comp up to Parent
  // all thoses data are rendered from App.js by 'props' and ExpenseDate Comp
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
