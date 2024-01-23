import React from 'react';
import Accordion from './Components/Accordion';
import RandomColor from './Components/RandomColor';
import StarRating from './Components/StarRating';
import ImageSlider from './Components/ImageSlider';
import LoadMore from './Components/LoadMore';
import TreeViews from './Components/TreeViews';
import QR_CodeGenerator from './Components/QR_CodeGenerator';
import ThemeSwitch from './Components/ThemeSwitch';
import ScrolledIndicator from './Components/ScrolledIndicator';
import Tabs from './Components/Tabs';

export default function App() {
    return (
        <div>
            {/* <Accordion /> */}
            {/* <RandomColor /> */}
            {/* <StarRating totalStars={10}/> */}
            {/* <ImageSlider url={'https://picsum.photos/v2/list'} /> */}
            {/* <LoadMore/> */}
            {/* <TreeViews/> */}
            {/* <QR_CodeGenerator/> */}
            {/* <ThemeSwitch/> */}
            {/* <ScrolledIndicator url={'https://dummyjson.com/products'}/> */}
            <Tabs />
        </div>
    );
}
