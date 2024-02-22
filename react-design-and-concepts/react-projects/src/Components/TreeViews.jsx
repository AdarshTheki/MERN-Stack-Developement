/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { menus } from './tree-views'; // importing a data tree view structure

// Tree view components / menu UI components / recursive navigation menu
export default function TreeViews() {
    return (
        <div className='wrapper'>
            <h2>Tree view components:</h2>
            <MenuList list={menus} />
        </div>
    );
}

function MenuList({ list = [] }) {
    return (
        <ul className='menu-list'>
            {list && list.length
                ? list.map((listItem) => <MenuItem key={listItem.label} item={listItem} />)
                : null}
        </ul>
    );
}

function MenuItem({ item }) {
    const [currentChild, setCurrentChild] = useState({});

    function toggleChild(child) {
        setCurrentChild({ ...currentChild, [child]: !currentChild[child] });
    }

    return (
        <li className='menu-item'>
            <div>
                <p>{item.label}</p>
                {item && item.children ? (
                    <span onClick={() => toggleChild(item.label)}>
                        {currentChild[item.label] ? '-' : '+'}
                    </span>
                ) : null}
            </div>
            {item && item.children && currentChild[item.label] ? (
                <MenuList list={item.children} />
            ) : null}
        </li>
    );
}
