import { NextAuthOptions } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions: NextAuthOptions = {
    // Secret for Next-auth, without this JWT encryption/decryption won't work
    secret: process.env.NEXTAUTH_SECRET,
    // session: {
    //     strategy: 'jwt'
    // },
    pages: {
        signIn: '/login',
        error: '/login?error=true',
    },

    // Configure one or more authentication providers
    providers: [
        // GithubProvider({
        //   clientId: process.env.GITHUB_APP_CLIENT_ID as string,
        //   clientSecret: process.env.GITHUB_APP_CLIENT_SECRET as string,
        // }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID as string,
            clientSecret: process.env.GOOGLE_SECRET as string
        }),

        CredentialsProvider({
            // The name to display on the sign in form (e.g. 'Sign in with...')
            name: 'Credentials',
            // The credentials is used to generate a suitable form on the sign in page.
            // You can specify whatever fields you are expecting to be submitted.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                // You need to provide your own logic here that takes the credentials
                // submitted and returns either a object representing a user or value
                // that is false/null if the credentials are invalid.
                // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
                // You can also use the `req` object to obtain additional parameters
                // (i.e., the request IP address)
                //   const res = await fetch("/your/endpoint", {
                //     method: 'POST',
                //     body: JSON.stringify(credentials),
                //     headers: { "Content-Type": "application/json" }
                //   })
                //   const user = await res.json()
                const user = {
                    name: 'henoc',
                    id: '123456'
                }

                if (credentials?.username == 'henoc' && credentials?.password == "1234") {
                    return user
                }
                // Return null if user data could not be retrieved
                return null

                // If no error and we have user data, return it
            }
        })
    ],
};