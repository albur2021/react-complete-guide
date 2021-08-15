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
      setEnteredTitle(event.target.value);//that's input data, the browser gives us
      
      //4. Here is another approach:
    //   setUserInput({
    //     ...userInput,//copy others - enteredAmount, enteredDate, so don't loose them
    //     enteredTitle:event.target.value,
        //})

        //5. Here is the Updating State that Depends on the Previous State
        // This approach is much safer and will guarantee that previous data is not outdated and most recent one
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
    //     ...userInput,//copy all other v
    //     enteredDate:event.target.value,
    //   })
     };

     const submitHandler = (event) =>{
        event.preventDefault();//prevent from refreshing webpage by browser
        
        //Storing data into this object:
       const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
        //console.log(expenseData);

        //passing this method here over 'props' from Parent - NewExpense Comp 
        // to pass the object's data from expense Data as parameter to the Parent - NewExpense Comp 
        // So now we have 2 ways of passing method from Parent Comp to be used/gather Data from Child Comp
        props.onSaveExpenseData(expenseData);

        //Updating/Empty data after data were stored
         //Two-way binding state: store and change/clean data from UI
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
          value={enteredTitle} //two-way binding - to reset/make the input an empty again to 'setEnteredTitle(""), after the form is submitted
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
