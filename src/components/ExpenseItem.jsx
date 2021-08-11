import './ExpenseItem.css';

const ExpenseItem = (props) => {
  return (
    // We can't have two HTML root element here, hence we wrap all our tags
    <div className="expense-item">
      <div >{props.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">{props.amount}</div>
    </div>
  );
};

export default ExpenseItem;
