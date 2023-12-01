import React from 'react'
import DisExpense from './DisExpense'

const AddExpense = ({onSubmited}) => {

    const handleFormSubmit = (expenseData) => {
        const enteredExpense = {
            ...expenseData,
            id: Math.random().toString()
        };
        console.log(enteredExpense)
        onSubmited(enteredExpense)
    }

    return (
        <div>

            <DisExpense onSubmit={handleFormSubmit} />
        </div>
    )
}

export default AddExpense