/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const data = [
    {
        id: 1,
        label: 'Heading is here 1',
        message:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est eligendi praesentium velit odio commodi voluptatum necessitatibus facilis, saepe tempore natus fugiat ratione. Dolorem mollitia molestias iusto soluta ipsa nesciunt alias?',
    },
    {
        id: 2,
        label: 'Heading is here 2',
        message:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est eligendi praesentium velit odio commodi voluptatum necessitatibus facilis, saepe tempore natus fugiat ratione. Dolorem mollitia molestias iusto soluta ipsa nesciunt alias?',
    },
    {
        id: 3,
        label: 'Heading is here 3',
        message:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est eligendi praesentium velit odio commodi voluptatum necessitatibus facilis, saepe tempore natus fugiat ratione. Dolorem mollitia molestias iusto soluta ipsa nesciunt alias?',
    },
    {
        id: 4,
        label: 'Heading is here 4',
        message:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est eligendi praesentium velit odio commodi voluptatum necessitatibus facilis, saepe tempore natus fugiat ratione. Dolorem mollitia molestias iusto soluta ipsa nesciunt alias?',
    },
];

export default function Accordian() {
    const [select, setSelect] = useState(null);
    const [multiSelect, setMultiSelect] = useState([]);
    const [enableMultiSelect, setEnableMultiSelect] = useState(false);

    const selectHandler = (ids) => {
        if (enableMultiSelect) {
            setMultiSelect((prev) => {
                return prev.includes(ids) ? prev.filter((i) => i !== ids) : [...prev, ids];
            });
        } else {
            setSelect((prev) => (prev !== ids ? ids : null));
        }
    };

    return (
        <div className='wrapper'>
            <button onClick={() => setEnableMultiSelect(!enableMultiSelect)}>
                select {enableMultiSelect ? 'Single' : 'Multiple'} data
            </button>
            {data.map((item) => (
                <div key={item.id}>
                    <button onClick={() => selectHandler(item.id)}>{item.label}</button>
                    {enableMultiSelect
                        ? multiSelect.indexOf(item.id) !== -1 && <p>{item.message}</p>
                        : select === item.id && <p>{item.message}</p>}
                </div>
            ))}
        </div>
    );
}
