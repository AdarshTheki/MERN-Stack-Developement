import React, { useState } from 'react';
import { data } from './accordion-data';

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
        <div className='wrapper'>
            <h3>Accordion:</h3>
            <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
                {enableMultiSelection ? 'Disable' : 'Enable'} Multiple Selection
            </button>
            <div className='accordion'>
                {data && data.length > 0 ? (
                    data.map((dataItem) => (
                        <div
                            key={dataItem?.id}
                            onClick={
                                enableMultiSelection
                                    ? () => handleMultipleSelection(dataItem.id)
                                    : () => handleSingleSelection(dataItem.id)
                            }
                            className='item'>
                            <h3>{dataItem.label} ↓</h3>

                            {enableMultiSelection
                                ? multiple.indexOf(dataItem.id) !== -1 && (
                                      <h5>{dataItem.message}</h5>
                                  )
                                : selected === dataItem.id && <h5>{dataItem.message}</h5>}
                        </div>
                    ))
                ) : (
                    <h2>Data not found !</h2>
                )}
            </div>
        </div>
    );
}
