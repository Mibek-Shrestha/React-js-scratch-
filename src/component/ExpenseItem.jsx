import React from 'react'
import './ExpenseItem.css'
import Date from './Date'
import Card from './Card'
const ExpenseItem = ({ title, amount, date }) => {

    return (
        <Card className='expense-item'>
            <Date date={date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>{amount}</div>
            </div>
        </ Card>
    )
}

export default ExpenseItem