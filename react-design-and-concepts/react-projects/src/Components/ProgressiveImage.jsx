/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import tiny from '../tinyPic.jpg';

function ProgressiveImage(props) {
    const { src, placeholder } = props;
    const [imgSrc, setImgSrc] = useState(placeholder || src);

    const customClass = placeholder && imgSrc === placeholder ? 'loading' : 'loaded';

    useEffect(() => {
        const newImage = new Image();
        newImage.src = src;
        newImage.onload = () => {
            setImgSrc(src);
        };
        // clean up
        return () => (newImage.onload = null);
    }, [src]);

    return <img className={customClass} src={imgSrc} alt='tiny' width='100%' height={250} />;
}

export default function Images() {
    const url =
        'https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/4MCKNAc6AbWjEsM2h9Xc29owo4z.jpg';
    return (
        <div className='wrapper'>
            {Array.from({ length: 10 }, (_, index) => (
                <ProgressiveImage src={url} placeholder={tiny} key={index} />
            ))}
        </div>
    );
}
