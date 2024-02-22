/* eslint-disable react/prop-types */
import React, { useState } from 'react';

export default function Test() {
    const [items, setItems] = useState([
        {
            id: 1,
            name: 'Adarsh Verma',
            content: 'lorem Create Custom Drag And Drop :Create Custom Drag And Drop :',
        },
        {
            id: 2,
            name: 'Ayush Mishara',
            content: 'lorem Create Custom Drag And Drop :Create Custom Drag And Drop :',
        },
        {
            id: 3,
            name: 'Ravijant Shankya',
            content: 'lorem Create Custom Drag And Drop :Create Custom Drag And Drop :',
        },
        {
            id: 4,
            name: 'MIshra Lucky',
            content: 'lorem Create Custom Drag And Drop :Create Custom Drag And Drop :',
        },
    ]);
    
    return (
        <div className='wrapper'>
            <h2>Create Custom Drag And Drop :</h2>
            <DragAndDrop items={items} setItems={setItems} />
        </div>
    );
}

function DragAndDrop({ items, setItems }) {
    const [draggedItem, setDraggedItem] = useState(null);

    function handleDragStart(event, index) {
        setDraggedItem(index);
        event.dataTransfer.effectAllowed = 'move';
        event.dataTransfer.setData('text/plain', index);
    }

    function handleDragOver(index) {
        if (index === draggedItem) {
            return;
        }
        const newItems = [...items];
        const removeItems = newItems.splice(draggedItem, 1)[0];
        newItems.splice(index, 0, removeItems);
        setItems(newItems);
        setDraggedItem(index);
    }

    return (
        <div className='drag-and-drop'>
            {items?.map((item, index) => (
                <div
                    key={item.id}
                    className={`item ${index === draggedItem ? 'dragging' : ''}`}
                    draggable
                    onDragStart={(e) => handleDragStart(e, index)}
                    onDragOver={() => handleDragOver(index)}
                    onDragEnd={() => setDraggedItem(null)}>
                    <h4>
                        {item.id}: {item.name}
                    </h4>
                    <p>{item.content}</p>
                </div>
            ))}
        </div>
    );
}
