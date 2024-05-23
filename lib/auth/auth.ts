import { NextAuthOptions } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';

import { MongoDBAdapter } from "@auth/mongodb-adapter"
import clientPromise from '../db';
import { Adapter } from 'next-auth/adapters';
import Email from 'next-auth/providers/email';
// import clientPromise from "@/lib/mongodb"

export const authOptions: NextAuthOptions = {
    // Secret for Next-auth, without this JWT encryption/decryption won't work
    secret: process.env.NEXTAUTH_SECRET,
    // adapter: MongoDBAdapter(clientPromise),
    session: {
        strategy: 'jwt'
    },
    adapter: MongoDBAdapter(clientPromise) as Adapter,
    pages: {
        signIn: '/login',
        error: '/login?error=true',
    },

    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID as string,
            clientSecret: process.env.GOOGLE_SECRET as string
        }),

        CredentialsProvider({
            // The name to display on the sign in form (e.g. 'Sign in with...')
            name: 'Credentials',
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {

                const user = {
                    name: 'henoc',
                    email: 'henoc@email.com',
                    id: '123456'
                }

                if (credentials?.username == 'henoc' && credentials?.password == "1234") {
                    console.log('OK')
                    return user
                }
                // Return null if user data could not be retrieved
                return null

                // If no error and we have user data, return it
            }
        })
    ],

};