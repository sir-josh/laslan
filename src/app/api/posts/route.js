import { NextResponse } from "next/server";
import { prisma } from "@/utils/db";


export const GET = async (request) => {
	const url = new URL(request.url);
	const username = url.searchParams.get("username");

	try {
		const posts = await prisma.post.findMany(
			username && {
				where: {
					username: username,
				},
			},
		);

		return new NextResponse(JSON.stringify(posts), { status: 200 });
	} catch (err) {
		console.error(err);
		await prisma.$disconnect();
		return new NextResponse("Database Error", { status: 500 });
	}
};

export const POST = async (request) => {
	const {title, desc, imgUrl, content, username} = await request.json();

	try {
		const posts = await prisma.post.create({
			data: {
				title: title,
				desc: desc,
				img: imgUrl,
				content: content,
				username: username
			}
		});

		return new NextResponse("Post created successfully", { status: 201 });
	} catch (err) {
		console.error(err);
		await prisma.$disconnect();
		return new NextResponse("Database Error", { status: 500 });
	}
};
