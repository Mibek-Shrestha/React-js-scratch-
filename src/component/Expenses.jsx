import React from 'react'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import Card from './Card';
const Expenses = ({ expense }) => {

    return (
        <Card className='expenses'>
            <ExpenseItem title={expense[0].title} amount={expense[0].amount} date={expense[0].date} />
            <ExpenseItem title={expense[1].title} amount={expense[1].amount} date={expense[1].date} />
            <ExpenseItem title={expense[2].title} amount={expense[2].amount} date={expense[2].date} />
        </Card>
    )
}

export default Expenses