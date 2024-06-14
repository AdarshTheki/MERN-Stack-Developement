import React, { useState } from 'react';
import { products } from './dummyData';

export default function Accordion() {
    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);

    function handleSingleSelection(Id) {
        setSelected(selected === Id ? null : Id);
    }

    function handleMultipleSelection(Id) {
        let copyState = [...multiple];
        const findIndexWithId = copyState.indexOf(Id);

        if (findIndexWithId === -1) {
            copyState.push(Id);
        } else {
            copyState.splice(findIndexWithId, 1);
        }
        setMultiple(copyState);
    }

    return (
        <div>
            <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
                {enableMultiSelection ? 'Disable' : 'Enable'} Multiple Selection
            </button>
            <div className='accordion'>
                {products.slice(0, 5).map((dataItem) => (
                    <li
                        key={dataItem?.id}
                        onClick={
                            enableMultiSelection
                                ? () => handleMultipleSelection(dataItem.id)
                                : () => handleSingleSelection(dataItem.id)
                        }
                        className='item'>
                        {dataItem.title} ↓
                        {enableMultiSelection
                            ? multiple.indexOf(dataItem.id) !== -1 && <p>{dataItem.description}</p>
                            : selected === dataItem.id && <p>{dataItem.description}</p>}
                    </li>
                ))}
            </div>
        </div>
    );
}
