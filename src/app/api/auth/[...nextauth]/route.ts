import GithubProvider from 'next-auth/providers/github'

import NextAuth, { AuthOptions } from 'next-auth'
import CredentialsProvider from "next-auth/providers/credentials"
import axios from 'axios'

export const OPTIONS: AuthOptions = {
  pages: {
    signIn: '/login',
  },
  providers: [
    GithubProvider({
      clientId: process.env.AUTH_SECRET as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    CredentialsProvider({
      async authorize(credentials, req) {
        try {
          const res = await axios.post('https://exam.elevateegy.com/api/v1/auth/signin', {
            email: credentials?.email,
            password: credentials?.password,
          },
          {
            headers : {
              'Content-Type' : 'application/json'
            }
          })

          console.log(res)
        if(res.data.user) {
          return {
            id : res.data.user._id,
            email : res.data.user.email,
            name : res.data.user.email
          }
        }
          return null
        } catch (error: Error | unknown) {
          console.log('error',error)
          const errMsg = (error as any).response?.data?.message || 'Invalid email or password'
          throw new Error(errMsg)
        }
      },
      credentials: {
        email: { label: "Username", type: "text", placeholder: "Enter your username" },
        password: { label: "Password", type: "password", placeholder: "Enter your password" },
      },
    }),
  ],
  secret : process.env.NEXTAUTH_SECRET,
  session : {
    strategy : 'jwt',
    maxAge : 30 * 24 * 60 * 60, // 30 days
  }
}

const handler = NextAuth(OPTIONS)

// Explicitly export GET and POST methods for Next.js API routes
export { handler as GET, handler as POST };