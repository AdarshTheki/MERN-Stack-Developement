import React, { useEffect, useState } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';

export default function ImageSlider({ url, limit = 5, page = 1 }) {
    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [errMessage, setErrMessage] = useState(null);
    const [loading, setLoading] = useState(true);

    async function fetchUrl(url) {
        try {
            const res = await fetch(`${url}?page=${page}&limit=${limit}`);
            const data = await res.json();
            setImages(data);
        } catch (error) {
            setErrMessage(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (url !== '') fetchUrl(url);
    }, [url]);

    function previousBtn() {
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
    }
    function nextBtn() {
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
    }

    if (loading) return <h2 className='wrapper'>Loading data ! please wait.....</h2>;

    if (errMessage) return <h2 className='wrapper'>SomeThing was Wrong ! , {errMessage}</h2>;

    return (
        <div className='wrapper'>
            <div className='image-slider'>
                <BsArrowLeftCircleFill className='left arrow' onClick={previousBtn} />
                <div className='image-container'>
                    {images && images.length > 0
                        ? images.map((imageItem, index) => (
                              <img
                                  key={imageItem.id}
                                  src={imageItem.download_url}
                                  alt={imageItem?.author}
                                  width='100%'
                                  className={currentSlide === index ? 'show' : 'hidden'}
                              />
                          ))
                        : null}
                </div>
                <div className='circles'>
                    {images && images.length
                        ? images.map((_, index) => (
                              <button
                                  className={currentSlide === index ? 'active' : ''}
                                  key={index}></button>
                          ))
                        : null}
                </div>
                <BsArrowRightCircleFill className='right arrow' onClick={nextBtn} />
            </div>
        </div>
    );
}
