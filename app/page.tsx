'use client';
import Image from 'next/image';
import PopupsPositioner from './components/popups-pos';

export default function Home() {
  return (
    <main className='min-h-screen min-w-full flex'>
      <div className='-z-50 text-8xl'>THIS IS AJAX'S WEBSITE</div>
      <PopupsPositioner />
    </main>
  );
}
