import React from 'react'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import Card from './Card';
const Expenses = ({ expense }) => {
    console.log(expense)
    return (
        <Card className='expenses'>
            {expense.map((expenses) => (
                <ExpenseItem
                    key={expenses.id}
                    title={expenses.title}
                    amount={expenses.amount}
                    date={expenses.date}
                />
            ))
            }
        </Card>
    )
}

export default Expenses