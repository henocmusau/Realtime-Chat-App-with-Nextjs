'use client'
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import { signOut } from '@/app/(auth)/actions';


export default function useAuthenticate() {

    const supabase = createClient()
    const router = useRouter()

    const signInWithGoogle = async () => {
        await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: `http://localhost:4000/auth/callback`,
            },
        })
        router.push('/')
    }

    const handleSignOut = async () => {
        await signOut()
            .then(console.log)
            .catch(console.error)
    }

    return {
        signInWithGoogle,
        handleSignOut
    }
}
