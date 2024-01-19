import { useState } from 'react';
import Image from 'next/image';

export default function PopupOne(props: { style: Object }) {
  const [isOpen, setIsOpen] = useState(false);

  const popup = (
    <div style={props.style} className='window w-[500px] h-[350px] z-10'>
      <div className='title-bar'>
        <div className='title-bar-text'>
          WatchDog: The All-In-One Kubernetes Monitoring CLI
        </div>
        <div className='title-bar-controls'>
          <button aria-label='Minimize'></button>
          <button aria-label='Maximize'></button>
          <button onClick={handleClose} aria-label='Close'></button>
        </div>
      </div>
      <div className='window-body'>
        <div className='flex items-center justify-center'>
          {/* Flex container for image and INSTALL NOW */}
          <div className='flex items-center'>
            <div className=''>
              <Image
                src='/WatchdogAd.png'
                width={280}
                height={250}
                alt='WatchDog Logo'
              />
            </div>
          </div>
        </div>
        <div className='flex items-center justify-center font-bold'>
          Subscribe to K8s Cluster Events from Your Terminal
        </div>
        <div className='flex items-center justify-center mt-2'>
          <button className='text-2xl h-max font-bold tracking-tighter text-red-500 ml-2'>
            <a href='http://www.getwatchdog.io' target='_blank'>
              Install
            </a>
          </button>
        </div>
      </div>
    </div>
  );

  setTimeout(() => {
    console.log('Delayed for 3 second.');
    setIsOpen(true);
  }, 4000);

  function handleClose() {
    setIsOpen(false);
  }

  return <>{isOpen ? popup : null}</>;
}
