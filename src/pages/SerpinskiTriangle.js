import React from 'react';
import { ReactP5Wrapper } from 'react-p5-wrapper';
import sketch from './sketch';

function SerpinskiTriangle() {
    return <ReactP5Wrapper sketch={sketch}></ReactP5Wrapper>;
}

export default SerpinskiTriangle;
