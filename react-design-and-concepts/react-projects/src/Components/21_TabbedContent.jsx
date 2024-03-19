/* eslint-disable react/prop-types */
import React, { useState } from 'react';

export default function TabTest() {
    function RandomComponent() {
        return (
            <div>
                <h4>Some Random Content</h4>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore magnam non
                    necessitatibus distinctio cupiditate voluptatem? Nesciunt nemo facilis ratione
                    maiores maxime cupiditate tempora totam, pariatur facere ut vero culpa dolorem.
                </p>
            </div>
        );
    }
    const tabs = [
        {
            label: 'Tab 1',
            content: (
                <p>
                    This is content for tab 1. Lorem ipsum, dolor sit amet consectetur adipisicing
                    elit. Consectetur eligendi ratione minima ducimus nisi temporibus, provident
                    quos cupiditate deleniti? Tempora sed nam placeat, accusantium in expedita hic
                    corporis deleniti fugit?
                </p>
            ),
        },
        {
            label: 'Tab 2',
            content: (
                <p>
                    This is content for tab 2. Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Excepturi suscipit vero hic, alias, necessitatibus nihil unde omnis dicta
                    dignissimos nostrum aperiam repellendus atque voluptate id? Est quae reiciendis
                    ipsum quia.
                </p>
            ),
        },
        { label: 'Tab 3', content: <RandomComponent /> },
    ];

    function handleChange(currentIndex) {
        console.log(currentIndex);
    }

    return <Tabs tabsContent={tabs} onChange={handleChange} />;
}

function Tabs({ tabsContent, onChange }) {
    const [currentTabIndex, setCurrentTabIndex] = useState(0);

    function handleOnClick(index) {
        setCurrentTabIndex(index);
        onChange(index);
    }

    return (
        <div className='wrapper'>
            <h2>Custom Tabs Components</h2>
            <div className='heading'>
                {tabsContent.map((tabItem, index) => (
                    <button key={index} onClick={() => handleOnClick(index)}>
                        {tabItem.label}
                    </button>
                ))}
            </div>
            <div className='content'>
                {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
            </div>
        </div>
    );
}
