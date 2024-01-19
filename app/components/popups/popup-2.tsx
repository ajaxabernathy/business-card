import { useState } from 'react';

export default function PopupTwo(props: { style: Object }) {
  const [isOpen, setIsOpen] = useState(false);

  const popup = (
    <div style={props.style} className='window w-[500px] h-[350px] z-20'>
      <div className='title-bar'>
        <div className='title-bar-text'>Install WatchDog Today!</div>
        <div className='title-bar-controls'>
          <button aria-label='Minimize'></button>
          <button aria-label='Maximize'></button>
          <button onClick={handleClose} aria-label='Close'></button>
        </div>
      </div>
      <div className='window-body'>
        <div className='w-full h-1/2 flex'>
          <div className='flex items-center text-4xl font-bold text-red-500 mt-8 mb-8'>
            HAVE YOU CHECKED OUT GETWATCHDOG.IO?
          </div>
        </div>
        <div className='flex flex-col justify-center'>
          <div className='field-row'>
            <input type='checkbox' id='example2' />
            <label className='font-bold text-md' htmlFor='example2'>
              I have learned more about WatchDog by clicking the button below!
            </label>
          </div>
          <div className='field-row'>
            <input disabled type='checkbox' id='example3' />
            <label className='font-bold text-md' htmlFor='example3'>
              I am not interested in WatchDog
            </label>
          </div>
        </div>
        <div className='flex items-center justify-center mt-12'>
          <div className='flex items-center justify-center  '>
            <button className='w-max'>
              <a href='http://www.getwatchdog.io' target='_blank'>
                Learn More
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  setTimeout(() => {
    console.log('Delayed for 3 second.');
    setIsOpen(true);
  }, 7000);

  function handleClose() {
    setIsOpen(false);
  }

  return <>{isOpen ? popup : null}</>;
}
