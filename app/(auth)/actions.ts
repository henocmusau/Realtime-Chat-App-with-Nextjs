'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/lib/supabase/server'
import { createClient as AdminClient } from '@supabase/supabase-js'


export async function login(formData: FormData) {
    const supabase = createClient()

    const data = {
        email: formData.get('username') as string,
        password: formData.get('password') as string,
    }

    const { error } = await supabase.auth.signInWithPassword(data)

    if (error) {
        redirect('/error')
    }

    revalidatePath('/', 'layout')
    redirect('/')
}

export async function signup(formData: FormData) {
    const supabase = createClient()

    const data = {
        email: formData.get('username') as string,
        password: formData.get('password') as string,
    }

    const { error } = await supabase.auth.signUp(data)

    if (error) {
        redirect('/error')
    }

    revalidatePath('/', 'layout')
    redirect('/')
}

export async function signOut() {
    const supabase = createClient()

    const { error } = await supabase.auth.signOut()
    if (error) {
        redirect('/error')
    }

    revalidatePath('/', 'layout')
    redirect('/login')
}

export async function signInWithGoogle() {
    console.log('Connecting...')
    const supabase = createClient()

    const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
            redirectTo: `http://localhost:4000/auth/callback`,
        },
    })

    if (error) {
        redirect('/error')
    }

    console.log('Connected')

    // revalidatePath('/', 'layout')
    redirect('/')
}

export async function getUser() {
    const supabase = createClient()

    const { data: { user }, error } = await supabase.auth.getUser()

    if (error) return redirect('/error?msg=' + error.message)

    return user
}


export async function getUsers() {

    const supabase = AdminClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!, {
        auth: {
            autoRefreshToken: false,
            persistSession: false
        }
    })

    // Access auth admin api

    const { data: { users }, error } = await supabase.auth.admin.listUsers()

    if (error) throw new Error(error.message)

    return users
}