import React, { useState } from "react";

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEntereDate] = useState('');

    //here is alternative way to set useState
    // const [userInput, setUserInput]=useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });

    
    const titleChangeHandler =(event)=>{
      //1.by default JS will automatically create this command
      //document.getElementById('').addEventListener('click',(event)=>{});
      
      //2.here React provides 'event object with its properties to see user input in browser
      //console.log(event.target.value);

      //3.Picking/Storing Data from Form/Input feature
      setEnteredTitle(event.target.value);
      
      //4. Here is another approach:
    //   setUserInput({
    //     ...userInput,
    //     enteredTitle:event.target.value,
        //})

        //5. Here is Updating State that Depends on the Previous State
        // setUserInput((prevState) =>{
        //     return { ...prevState, enteredTitle:event.target.value};
        // });
    };

    const amountChangeHandler = (event) =>{
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount:event.target.value,
        //   })
    };

    const dateChangeHandler = (event) =>{
       setEntereDate(event.target.value);
    //    setUserInput({
    //     ...userInput,
    //     enteredDate:event.target.value,
    //   })
     };

     const submitHandler = (event) =>{
        event.preventDefault();//prevent from refreshing webpage by browser
        
        //Storing date into this object:
        //Two-way binding state: store and change/clean data from UI
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
        //console.log(expenseData);
        props.onSaveExpenseData(expenseData);

        //Updating/Empty data after data were stored
        
        setEnteredTitle('');
        setEnteredAmount('');
        setEntereDate('');
     };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input 
          type="text" 
          value={enteredTitle} 
          onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input 
          type="number" 
          min="0.01" 
          step="0.01" 
          onChange={amountChangeHandler}
          value={enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input 
          type="date" 
          min="2019-01-01" 
          max="2022-12-31" 
          onChange={dateChangeHandler}
          value={enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
