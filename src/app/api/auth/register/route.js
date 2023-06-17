import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
const prisma = new PrismaClient();

export const POST = async (request) => {
	const { name, email, password } = await request.json();
	const hashedPassword = await bcrypt.hash(password, 5);

	try {
		const newUser = await prisma.user.create({
			data: {
				name,
				email,
				password: hashedPassword,
			},
		});

		return new NextResponse(
			`User with email "${newUser.email}" has been created`,
			{
				status: 201,
			},
		);
	} catch (err) {
		return new NextResponse(err.message, {
			status: 500,
		});
	}
};
