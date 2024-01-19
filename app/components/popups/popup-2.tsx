import { useState } from 'react';

export default function PopupTwo(props: { style: Object }) {
  const [isOpen, setIsOpen] = useState(false);

  const popup = (
    <div style={props.style} className='window w-[500px] h-[350px] z-40'>
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
          <div className='flex items-center text-4xl font-bold text-lime-500 mt-8 mb-8'>
            THIS IS POPUP TWO!
          </div>
        </div>
        <div className='flex flex-col justify-center'></div>
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
