import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        const placeholderBudget = newBudget;
        setNewBudget(event.target.value);
        if (newBudget > 20000){
            alert("Budget cannot exceed $20,000");
            setNewBudget(placeholderBudget);
        };
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}{newBudget}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
