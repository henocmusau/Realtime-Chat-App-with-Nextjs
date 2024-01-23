import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='h-full w-full flex flex-col items-center justify-center'>
      <div className='h-full w-full items-center justify-center flex flex-col'>
        <h1 className='text-2xl font-semibold mb-6'>Mon super site</h1>
        <Link href='/video' className='bg-indigo-600 hover:bg-indigo-500 duration-200 rounded-lg px-4 py-3 my-4 text-white '>Aller au lecteur vidéo</Link>
      </div>
    </main>
  )
}
