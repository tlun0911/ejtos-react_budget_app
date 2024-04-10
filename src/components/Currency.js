import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () =>{
    const {dispatch} = useContext(AppContext);

    const handleChange = () => {
        
    }


    return(
        <div>
            <select className="currency-select" id="currency-select" onChange={handleChange}>
                <option defaultValue>Choose your currency</option>
                <option value="dollar" name="dollar"> $ US Dollar</option>
                <option value="pound" name="pound">£ Pound</option>
                <option value="euro" name="euro">€ Euro</option>
                <option value="ruppee" name="ruppee">₹ Ruppee</option>
            </select>
        </div>


    );

};

export default Currency;
