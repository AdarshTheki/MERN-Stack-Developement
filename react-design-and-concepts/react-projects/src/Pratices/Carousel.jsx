import React, { useState } from 'react';

const urls = [
    {
        id: 1,
        url: 'https://media.istockphoto.com/id/1271158079/photo/deekshabhoomi-is-in-nagpur-maharashtra-a-location-regarded-as-a-pilgrimage-center-of-buddhism.jpg?s=1024x1024&w=is&k=20&c=wNnTwB8qt08sa0nnLhuUAoRUTcKTBGM3gq4ti8sVsnU=',
    },
    {
        id: 2,
        url: 'https://media.istockphoto.com/id/1271158079/photo/deekshabhoomi-is-in-nagpur-maharashtra-a-location-regarded-as-a-pilgrimage-center-of-buddhism.jpg?s=1024x1024&w=is&k=20&c=wNnTwB8qt08sa0nnLhuUAoRUTcKTBGM3gq4ti8sVsnU=',
    },
    {
        id: 3,
        url: 'https://media.istockphoto.com/id/1271158079/photo/deekshabhoomi-is-in-nagpur-maharashtra-a-location-regarded-as-a-pilgrimage-center-of-buddhism.jpg?s=1024x1024&w=is&k=20&c=wNnTwB8qt08sa0nnLhuUAoRUTcKTBGM3gq4ti8sVsnU=',
    },
    {
        id: 4,
        url: 'https://media.istockphoto.com/id/1271158079/photo/deekshabhoomi-is-in-nagpur-maharashtra-a-location-regarded-as-a-pilgrimage-center-of-buddhism.jpg?s=1024x1024&w=is&k=20&c=wNnTwB8qt08sa0nnLhuUAoRUTcKTBGM3gq4ti8sVsnU=',
    },
];

export default function Carousel() {
    const [images, setImages] = useState(urls);
    const [currentIndex, setCurrentIndex] = useState(0);

    const previous = () => {
        setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
    };

    const next = () => {
        setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
    };
    return (
        <div>
            {images[currentIndex](
                <div>
                    <img src={images[currentIndex].url} alt={images[currentIndex].id} width={500} />
                    <p>{images[currentIndex].id}</p>
                </div>
            )}
            <button onClick={next}>next</button>
            <button onClick={previous}>previous</button>
            <div>
                {images.map((_, i) => (
                    <button key={i} onClick={() => setCurrentIndex(i)}>
                        {i}
                    </button>
                ))}
            </div>
        </div>
    );
}
