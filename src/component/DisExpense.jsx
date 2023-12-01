import React, { useState } from 'react'
import './ExpenseForm.css'
const DisExpense = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');

  const handleChange = (e) => {
    setTitle(e.target.value)
  }
  const handleChangeAmount = (e) => {
    setAmount(e.target.value)
  }
  const handleChangeDate = (e) => {
    setDate(e.target.value)
  }
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: title,
      amount: amount,
      date: new Date(date)
    }

    onSubmit(expenseData);
  }
  return (
    <form onSubmit={onSubmitHandler}>
      <div className='new-expense__controls'>
        <div className="new-expense__control">
          <label htmlFor="Title">Title</label>
          <input type="text" onChange={handleChange} value={title} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="Amount">Amount</label>
          <input type="text" onChange={handleChangeAmount} value={amount} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="Date">Title</label>
          <input type="date" onChange={handleChangeDate} value={date} />
        </div>
        <div className="new-expense__actions">
          <button>Add Expense</button>
        </div>
      </div>

    </form>

  )
}

export default DisExpense