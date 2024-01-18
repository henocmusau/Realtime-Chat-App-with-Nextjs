import Image from 'next/image'
import styles from './page.module.css'
import VideoPlayer from '@/components/VideoPlayer'

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-center'>
      <div className='text-2xl font-semibold flex flex-col items-center justify-center'>
        <h1 className='text-3xl font-semibold my-3'>Webcam Video Player</h1>
        <VideoPlayer />
      </div>
    </main>
  )
}
