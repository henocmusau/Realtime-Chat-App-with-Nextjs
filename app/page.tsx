
import { MessageWrapper } from '@/components'
import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

export default async function Home() {

  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) redirect('/login')

  return (
    <>
      <MessageWrapper />

      {/* <h1 className='text-2xl font-semibold mb-6'>Mon super site</h1>
      <Link href='/video' className='bg-indigo-600 hover:bg-indigo-500 duration-200 rounded-lg px-4 py-3 my-4 text-white '>Aller au lecteur vidéo</Link> */}
    </>
  )
}
