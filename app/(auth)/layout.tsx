import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"


export default async function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const supabase = createClient()

    const {
        data: { user },
    } = await supabase.auth.getUser()

    if (user) redirect('/')
    return (
        <main className='flex flex-col bg-gray-950/60 backdrop-blur max-w-max items-center justify-center text-left p-8 rounded-xl'>
            {children}
        </main>
    )
}
