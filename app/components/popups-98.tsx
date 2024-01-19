'use client';
import '98.css';
import { useEffect, useState } from 'react';

const Popups98 = () => {
  // State variables to control open and close
  const [time, setTime] = useState(0);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const [isOpen7, setIsOpen7] = useState(false);
  // Object to store popups with numbers 1+ as keys
  const popups = {
    1: (
      <div className='window w-[500px] h-[250px]'>
        <div className='title-bar'>
          <div className='title-bar-text'>THIS IS POPUP NUMBER ONE</div>
          <div className='title-bar-controls'>
            <button aria-label='Minimize'></button>
            <button aria-label='Maximize'></button>
            <button onClick={handleClose1} aria-label='Close'></button>
          </div>
        </div>
        <div className='window-body'>
          <p>HELLO</p>
        </div>
      </div>
    ),
    2: (
      <div className='window w-[500px] h-[250px]'>
        <div className='title-bar'>
          <div className='title-bar-text'>THIS IS POPUP NUMBER TWO</div>
          <div className='title-bar-controls'>
            <button aria-label='Minimize'></button>
            <button aria-label='Maximize'></button>
            <button onClick={handleClose2} aria-label='Close'></button>
          </div>
        </div>
        <div className='window-body'>
          <p>HEY</p>
        </div>
      </div>
    ),
    3: (
      <div className='window w-[500px] h-[250px]'>
        <div className='title-bar'>
          <div className='title-bar-text'>THIS IS POPUP NUMBER THREE</div>
          <div className='title-bar-controls'>
            <button aria-label='Minimize'></button>
            <button aria-label='Maximize'></button>
            <button onClick={handleClose3} aria-label='Close'></button>
          </div>
        </div>
        <div className='window-body'>
          <p>WHAT'S UP</p>
        </div>
      </div>
    ),
    4: (
      <div className='window w-[500px] h-[250px]'>
        <div className='title-bar'>
          <div className='title-bar-text'>THIS IS POPUP NUMBER FOUR</div>
          <div className='title-bar-controls'>
            <button aria-label='Minimize'></button>
            <button aria-label='Maximize'></button>
            <button onClick={handleClose4} aria-label='Close'></button>
          </div>
        </div>
        <div className='window-body'>
          <p>WHAT'S UP</p>
        </div>
      </div>
    ),
    5: (
      <div className='window w-[500px] h-[250px]'>
        <div className='title-bar'>
          <div className='title-bar-text'>THIS IS POPUP NUMBER FIVE</div>
          <div className='title-bar-controls'>
            <button aria-label='Minimize'></button>
            <button aria-label='Maximize'></button>
            <button onClick={handleClose5} aria-label='Close'></button>
          </div>
        </div>
        <div className='window-body'>
          <p>WHAT'S UP</p>
        </div>
      </div>
    ),
    6: (
      <div className='window w-[500px] h-[250px]'>
        <div className='title-bar'>
          <div className='title-bar-text'>THIS IS POPUP NUMBER SIX</div>
          <div className='title-bar-controls'>
            <button aria-label='Minimize'></button>
            <button aria-label='Maximize'></button>
            <button onClick={handleClose6} aria-label='Close'></button>
          </div>
        </div>
        <div className='window-body'>
          <p>WHAT'S UP</p>
        </div>
      </div>
    ),
    7: (
      <div className='window w-[500px] h-[250px]'>
        <div className='title-bar'>
          <div className='title-bar-text'>THIS IS POPUP NUMBER SEVEN</div>
          <div className='title-bar-controls'>
            <button aria-label='Minimize'></button>
            <button aria-label='Maximize'></button>
            <button onClick={handleClose7} aria-label='Close'></button>
          </div>
        </div>
        <div className='window-body'>
          <p>WHAT'S UP</p>
        </div>
      </div>
    ),
  };

  // Timer to schedule popup display
  useEffect(() => {
    const timer = setInterval(() => {
      setTime((sp) => sp + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // useEffect with time state variable as dependency, opens popups as time increases
  useEffect(() => {
    const randNum = Math.floor(Math.random() * 7) + 1;
    if (time === 4) {
      eval('setIsOpen' + randNum + '(true)');
    }
    if (time === 8) {
      eval('setIsOpen' + randNum + '(true)');
    }
    if (time === 11) {
      eval('setIsOpen' + randNum + '(true)');
    }
    if (time === 13) {
      eval('setIsOpen' + randNum + '(true)');
    }
    if (time === 15) {
      eval('setIsOpen' + randNum + '(true)');
    }
    if (time === 16) {
      eval('setIsOpen' + randNum + '(true)');
    }
    if (time === 17) {
      eval('setIsOpen' + randNum + '(true)');
    }
  }, [time]);

  // Functions to handle popup close button click
  function handleClose1() {
    setIsOpen1(false);
  }
  function handleClose2() {
    setIsOpen2(false);
  }
  function handleClose3() {
    setIsOpen3(false);
  }
  function handleClose4() {
    setIsOpen4(false);
  }
  function handleClose5() {
    setIsOpen5(false);
  }
  function handleClose6() {
    setIsOpen6(false);
  }
  function handleClose7() {
    setIsOpen7(false);
  }

  return (
    <div>
      {/* {isOpen1 ? popups[1] : null} */}
      {popups[1]}
    </div>
    // <div>{isOpen2 ? popups[2] : null}</div>
    // <div>{isOpen3 ? popups[3] : null}</div>
    // <div>{isOpen4 ? popups[4] : null}</div>
    // <div>{isOpen5 ? popups[5] : null}</div>
    // <div>{isOpen6 ? popups[6] : null}</div>
    // <div>{isOpen7 ? popups[7] : null}</div>
  );
};

export default Popups98;
