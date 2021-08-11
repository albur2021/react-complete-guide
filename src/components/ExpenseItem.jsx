import './ExpenseItem.css';

const ExpenseItem = (props) => {
  return (
    // We can't have two HTML root element here, hence we wrap all our tags
    <div className="expense-item">
      <div >March 28th 2021</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
      </div>
      <div className="expense-item__price">$294.67</div>
    </div>
  );
};

export default ExpenseItem;
