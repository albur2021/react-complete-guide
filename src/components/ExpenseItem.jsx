import './ExpenseItem.css';
const expenseDate = new Date(2021, 7, 28);//initialize date 
const expenseTitle = "Car insurance";
const expenseAmout = 294.07;
const ExpenseItem = (props) => {
  return (
    // We can't have two HTML root element here, hence we wrap all our tags
    <div className="expense-item">
      <div >{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
      </div>
      <div className="expense-item__price">{expenseAmout}</div>
    </div>
  );
};

export default ExpenseItem;
