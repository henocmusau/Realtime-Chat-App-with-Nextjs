
import { MessageWrapper } from '@/components'
import { redirect } from 'next/navigation'
import { getUsers, getUser } from '@/app/(auth)/actions'
// import { IP } from '@/globalActions'

export default async function Home() {

  const user = await getUser()
  // const ip = await IP()
  const users = await getUsers()
  // console.log(ip)

  if (!user) redirect('/login')

  return (
    <>
      <MessageWrapper users={users} connectedUser={user} />

      {/* <h1 className='text-2xl font-semibold mb-6'>Mon super site</h1>
      <Link href='/video' className='bg-indigo-600 hover:bg-indigo-500 duration-200 rounded-lg px-4 py-3 my-4 text-white '>Aller au lecteur vidéo</Link> */}
    </>
  )
}
