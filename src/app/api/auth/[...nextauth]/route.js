import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

const handler = NextAuth({
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
		CredentialsProvider({
			id: "credentials",
			name: "Credentials",
			async authorize(credentials) {
				try {
					const user = await prisma.user.findUnique({
						where: {
							email: credentials.email,
						},
					});

					if (user) {
						//Check for password
						const isPasswordCorrect = await bcrypt.compare(
							credentials.password,
							user.password,
						);

						if (isPasswordCorrect) {
							return user;
						} else {
							throw new Error("Wrong Credentials!");
						}
					} else {
						throw new Error("User not found!");
					}
				} catch (err) {
					throw new Error(err);
				}
			},
		}),
	],
	pages: {
		error: "/dashboard/login"
	}
});

export { handler as GET, handler as POST };
