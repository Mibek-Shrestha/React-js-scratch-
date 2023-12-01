import React, { useState } from 'react'
import Expenses from './component/Expenses'
import AddExpense from './component/AddExpense';
import ExpensesFilter from './component/ExpensesFilter';

const App = () => {
  const DUMMY = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const [expenses, setExpense] = useState(DUMMY);
  const addExpenseHandler = enteredExpense => {
    setExpense([enteredExpense, ...expenses])
  }

  const [filterData, setfilterData] = useState('');

  const onFilter = (filterValue) => {
    setfilterData(filterValue)
    console.log(filterData);

  }
  return (
    <>
      <AddExpense onSubmited={addExpenseHandler} />
      <ExpensesFilter onChangeFilter={onFilter} />
      <Expenses expense={expenses} />

    </>
  )

}

export default App



