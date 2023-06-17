import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const GET = async (request, { params }) => {
	const { id } = params;
	try {
		const post = await prisma.post.findUnique({
			where: {
				id: Number(id),
			},
		});

		return new NextResponse(JSON.stringify(post), { status: 200 });
	} catch (err) {
		console.error(err);
		await prisma.$disconnect();
		return new NextResponse("Database Error", { status: 500 });
	}
};

export const DELETE = async (request, { params }) => {
	const { id } = params;
	try {
		await prisma.post.delete({
			where: {
				id: Number(id),
			},
		});

		return new NextResponse("Post had been deleted", { status: 200 });
	} catch (err) {
		console.error(err);
		await prisma.$disconnect();
		return new NextResponse("Database Error", { status: 500 });
	}
};
