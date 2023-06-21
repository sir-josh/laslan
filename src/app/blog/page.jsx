"use client";
import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

async function getData() {
	// const res = await fetch("http://localhost:3000/api/posts", {

	const IS_SERVER = typeof window === "undefined";

	const baseURL = IS_SERVER
		? process.env.NEXT_PUBLIC_SITE_URL
		: window.location.origin;

	const fetchUrl = `${baseURL}/api/posts`;

	const res = await fetch(fetchUrl, {
		cache: "no-store",
	});

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

	return res.json();
}

const Blog = async () => {
	const data = await getData();

	return (
		<div className={styles.mainContainer}>
			{data.map((item) => (
				<Link
					href={`/blog/${item.id}`}
					className={styles.container}
					key={item.id}>
					<div className={styles.imageContainer}>
						<Image
							src={item.img}
							alt=""
							width={400}
							height={250}
							className={styles.image}
						/>
					</div>
					<div className={styles.content}>
						<h1 className={styles.title}>{item.title}</h1>
						<p className={styles.desc}>{item.desc}</p>
					</div>
				</Link>
			))}
		</div>
	);
};

export default Blog;
