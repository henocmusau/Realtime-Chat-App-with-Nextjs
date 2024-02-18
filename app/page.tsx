import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import MessagesSenders from '@/components/Messages/MessagesSenders'


export default function Home() {
  const defaultStyle = 'max-w-[85%] rounded-lg text-slate-200 p-4 mb-3 text-normal shadow-inner'
  const fromMeStyle = defaultStyle + ' float-right bg-indigo-900/10'
  const fromOtherStyle = defaultStyle + ' bg-gradient-to-br from-violet-800 to-violet-950'
  return (
    <main className='h-screen md:h-[70vh] w-full p-4 md:w-[90%] lg:w-[60%] flex bg-gray-950 text-slate-400 rounded-xl'>

      {/* Contacts Box */}
      <MessagesSenders />

      {/* Messages box */}
      <section className='w-full flex flex-col overflow-y-auto pl-4'>
        <header className='sticky h-full top-0 p-4 shadow-lg bg-gray-950 backdrop-blur mb-8'>
          XXX
        </header>

        {
          [1, 2, 3, 4, 5, 6, 7].map(msg => (
            <div className='w-full' key={msg}>
              <p className={msg % 2 === 0 ? fromMeStyle : fromOtherStyle} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates eum exercitationem accusantium sapiente laboriosam beatae temporibus dolorem esse, illum iusto architecto iste cupiditate id tempora maiores eveniet, cumque ex nisi.</p>
            </div>
          ))
        }

        <form className='sticky gap-x-3 bottom-0 flex bg-gray-950 pt-4'>
          <textarea
            className='textInput rounded-lg h-16'
            placeholder='Type your message'
          ></textarea>
          <button className='text-slate-100 bg-indigo-800 p-4 rounded-full '>
            Send
          </button>
        </form>

      </section>
      {/* <h1 className='text-2xl font-semibold mb-6'>Mon super site</h1>
      <Link href='/video' className='bg-indigo-600 hover:bg-indigo-500 duration-200 rounded-lg px-4 py-3 my-4 text-white '>Aller au lecteur vidéo</Link> */}
    </main>
  )
}
