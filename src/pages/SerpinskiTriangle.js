import React from 'react';
import { ReactP5Wrapper } from 'react-p5-wrapper';
import sketch from './p5/serpinskiTriangle';
import './serpinski-triangle.css';

function SerpinskiTriangle() {
    return (
        <div className="sketch-container">
            <ReactP5Wrapper
                sketch={sketch}
                id="serpinski-sketch"
            ></ReactP5Wrapper>
        </div>
    );
}

export default SerpinskiTriangle;
