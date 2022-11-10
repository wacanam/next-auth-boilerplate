import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import FacebookProvider from "next-auth/providers/facebook"


export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID || "",
            clientSecret: process.env.GITHUB_SECRET || "",
            checks: ["state"],
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID || "",
            clientSecret: process.env.GOOGLE_SECRET || "",
            checks: ["state"],
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_ID || "",
            clientSecret: process.env.FACEBOOK_SECRET || "",
            checks: ["state"],
        })

        // ...add more providers here
    ],
}

export default NextAuth(authOptions)