'use client';
import Image from 'next/image';
import Popups98 from './components/popups-98';
import PopupsPositioner from './components/popups-pos';

export default function Home() {
  return (
    <main className='min-h-screen min-w-full'>
      {/* <Popups98 /> */}
      <div className='-z-50 text-8xl'>THIS IS AJAX'S WEBSITE</div>
      <PopupsPositioner />
    </main>
  );
}
