import React from 'react';

function Loader({ strokeWidth = '10px', svgSize = '48px', strokeColor = 'red', text }) {
    /*
    @keyframe svgStyle {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    */
    const svgStyle = {
        width: svgSize,
        height: svgSize,
        animation: '2s linear 0s infinite normal none running svgStyle',
    };
    const circleOne = {
        fill: 'transparent',
        stroke: 'rgb(237, 235, 233)',
    };
    const circleTwo = {
        fill: 'transparent',
        stroke: strokeColor,
        animation: '1.5s linear 0s infinite normal none running circleTwo',
    };
    /*
    @keyframe circleTwo{
        0% {
            stroke-dasharray: 1, 400;
            stroke-dashoffset: 0;
        }
        50% {
            stroke-dasharray: 400, 400;
            stroke-dashoffset: -100;
        }
        100% {
            stroke-dasharray: 400, 400;
            stroke-dashoffset: -260;
        }
    }
    */
    return (
        <svg viewBox='0 0 100 100' style={svgStyle}>
            <circle cx='50' cy='50' r='42' strokeWidth={strokeWidth} style={circleOne}></circle>
            <circle cx='50' cy='50' r='42' strokeWidth={strokeWidth} style={circleTwo}></circle>
        </svg>
    );
}

export default function Test() {
    return (
        <div className='wrapper'>
            <Loader strokeWidth='10px' svgSize='60px' strokeColor='green' />
            <Loader strokeWidth='10px' svgSize='50px' strokeColor='red' />
            <Loader strokeWidth='10px' svgSize='40px' strokeColor='blue' />
            <Loader strokeWidth='10px' svgSize='30px' strokeColor='black' />
        </div>
    );
}
