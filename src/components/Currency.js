import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () =>{
    const {dispatch} = useContext(AppContext);

    const handleChange = (event) => {
        const newCurrency = event.target.value;
        dispatch({
            type: 'CHG_CURRENCY',
            payload: newCurrency,
        });     
        
    }


    return(
        <div>
            <select className="custom-select" id="currency-select" title="Currency" onChange={handleChange} style={{backgroundColor: "lightgreen"}}>
                <option value="$" id="usDollar">$ US Dollar</option>
                <option value="£" id="pound">£ Pound</option>
                <option value="€" id="euro">€ Euro</option>
                <option value="₹" id="ruppee">₹ Ruppee</option>
            </select>
        </div>


    );

};

export default Currency;
