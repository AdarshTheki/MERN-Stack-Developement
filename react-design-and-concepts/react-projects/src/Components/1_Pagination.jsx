/* eslint-disable react/prop-types */
import React, { useState } from 'react';

function Pagination({ currentPage, totalPage = 10, onPageChange }) {
    function generateNoOfPages() {
        let pages = [];
        for (let i = 1; i <= totalPage; i++) {
            pages.push(i);
        }
        return pages;
    }

    return (
        <div className='pagination'>
            <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
                previous
            </button>
            {generateNoOfPages().map((page) => (
                <button key={page} onClick={() => onPageChange(page)}>
                    {page}
                </button>
            ))}
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPage}>
                next
            </button>
        </div>
    );
}

export default function PaginationTest() {
    const dummyData = Array.from({ length: 100 }, (_, index) => ({
        id: index + 1,
        product: `Page ${index + 1}`,
    }));
    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentListOfItems = dummyData.slice(indexOfFirstItem, indexOfLastItem);

    function handlePageChange(page) {
        setCurrentPage(page);
    }

    return (
        <div className='wrapper'>
            <h2>Pagination</h2>
            <ul>
                {currentListOfItems.map((listItem) => (
                    <li key={listItem.id}>{listItem.product}</li>
                ))}
            </ul>
            <Pagination
                currentPage={currentPage}
                totalPage={Math.ceil(dummyData.length / itemsPerPage)}
                onPageChange={handlePageChange}
            />
        </div>
    );
}
