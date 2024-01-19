import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import '98.css';
import PopupOne from './popups/popup-1';
import PopupTwo from './popups/popup-2';
import PopupThree from './popups/popup-3';
import PopupFour from './popups/popup-4';
import PopupFive from './popups/popup-5';

function PopupsPositioner() {
  const positions: { top: number; left: number }[] = [];

  const generateRandomPosition = () => {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Adjust these dimensions if the popup size changes!!!
    const popupWidth = 500;
    const popupHeight = 350;

    const maxTop = Math.max(0, viewportHeight - popupHeight);
    const maxLeft = Math.max(0, viewportWidth - popupWidth);

    const randomTop = Math.random() * maxTop;
    const randomLeft = Math.random() * maxLeft;
    return { top: randomTop, left: randomLeft };
  };

  for (let i = 0; i < 5; i++) {
    positions[i] = generateRandomPosition();
  }

  const divStyle = {
    position: 'fixed',
    top: `${positions[0].top}px`,
    left: `${positions[0].left}px`,
  };
  const divStyle2 = {
    position: 'fixed',
    top: `${positions[1].top}px`,
    left: `${positions[1].left}px`,
  };
  const divStyle3 = {
    position: 'fixed',
    top: `${positions[2].top}px`,
    left: `${positions[2].left}px`,
  };
  const divStyle4 = {
    position: 'fixed',
    top: `${positions[3].top}px`,
    left: `${positions[3].left}px`,
  };
  const divStyle5 = {
    position: 'fixed',
    top: `${positions[4].top}px`,
    left: `${positions[4].left}px`,
  };

  return (
    <>
      <PopupOne style={divStyle} />
      <PopupTwo style={divStyle2} />
      <PopupThree style={divStyle3} />
      <PopupFour style={divStyle4} />
      <PopupFive style={divStyle5} />
    </>
  );
}

export default PopupsPositioner;

// OLD USE EFFECT FOR GENERATING RANDOM POSITIONS ON INTERVAL
// This functionality has been switched out for a loop to generate an array of position objects
// The timing of rendering will be done in popup components with setTimeout()

// useEffect(() => {
// const updatePosition = () => {
//   if (count < 3) setCount((prevCount) => (prevCount += 1));
//   eval(`setPosition${count}(generateRandomPosition())`);
// };
// updatePosition(); // Set initial position
// const interval = setInterval(updatePosition, 3000); // Update every 3000 ms
// return () => clearInterval(interval);
// for (let i = 0; i < 3; i++) {
//   positions[i] = generateRandomPosition();
// }
// }, []);
