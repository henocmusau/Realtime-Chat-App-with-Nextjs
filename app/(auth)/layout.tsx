import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import { getUser } from "./actions"


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
        <html lang="en">
            <body className='min-h-[100vh] max-h-[100vh] box-border bg-slate-950 flex flex-col items-center justify-center text-black'>
                <main className='flex flex-col bg-gray-950/60 backdrop-blur max-w-max items-center justify-center text-left p-8 rounded-xl'>
                    {children}
                </main>
            </body>
        </html>
    )
}