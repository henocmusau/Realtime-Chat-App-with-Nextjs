import Image from 'next/image'
import styles from './page.module.css'
import VideoPlayerOne from '@/components/VideoPlayerOne'

export default function Home() {
  return (
    <main className=''>
      <div className='text-2xl font-semibold'>
        <VideoPlayerOne />
      </div>
    </main>
  )
}
