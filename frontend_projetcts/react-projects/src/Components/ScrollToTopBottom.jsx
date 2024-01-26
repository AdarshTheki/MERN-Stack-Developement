import React, { useRef } from 'react';
import useFetch from './useFetch';

// scroll to top and bottom to navigate windows
export default function ScrollToTopBottom() {
    const { data, pending, error } = useFetch('https://dummyjson.com/products', {});
    const bottomRef = useRef(null);

    function handleScrollToTop() {
      // first way to scroll
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }

    function handleScrollToBottom() {
        // second way to scroll
        bottomRef.current.scrollIntoView({ behavior: 'smooth', bottom: 0 });
    }

    if (pending || error) return <h2>Loading data ! please wait...</h2>;

    return (
        <div className='wrapper'>
            <h2>Scroll to top and bottom features</h2>
            <button onClick={handleScrollToBottom}>This is top components</button>
            <ul>
                {data && data.products.length
                    ? data.products.map((item) => <p key={item.id}>{item.title}</p>)
                    : null}
            </ul>
            <div ref={bottomRef}>This is Bottom</div>
            <button onClick={handleScrollToTop}>This is bottom components</button>
        </div>
    );
}
