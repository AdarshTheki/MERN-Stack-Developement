import React, { useState } from 'react';

export default function Test() {
    const [selectDate, setSelectDate] = useState(null);

    function handleDateSelect(date) {
        setSelectDate(date);
        console.log('selectedDate', date);
    }

    return (
        <div className='wrapper'>
            <h2>Create Custom Date Picker</h2>
            <p>Select Date: {selectDate}</p>
            <div className='datePicker'>
                <input
                    type='date'
                    value={selectDate}
                    onChange={(e) => handleDateSelect(e.target.value)}
                />
            </div>
        </div>
    );
}
