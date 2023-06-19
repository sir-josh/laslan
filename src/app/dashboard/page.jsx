"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/Navigation";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import useSWR from "swr";
import Image from "next/image";

const Dashboard = () => {
	// const [data, setData] = useState([]);
	// const [isLoading, setIsLoading] = useState(false);
	// const [err, setErr] = useState(false);

	// useEffect(() => {
	// 	async function getData() {
	// 		setIsLoading(true);
	// 		const res = await fetch(
	// 			"https://jsonplaceholder.typicode.com/posts",
	// 			{
	// 				cache: "no-store",
	// 			},
	// 		);

	// 		if (!res.ok) {
	// 			throw new Error("Failed to fetch data1");
	// 		}

	// 		const data = await res.json();
	// 		setData(data);
	// 		setIsLoading(false);
	// 	}
	// 	getData();
	// }, []);

	const session = useSession();
	const router = useRouter();

	const fetcher = (...args) => fetch(...args).then((res) => res.json());

	const { data, mutate, isLoading, error } = useSWR(
		`/api/posts?username=${session?.data?.user.name}`,
		fetcher,
	);

	if (session.status === "loading") {
		return <p>Loading...</p>;
	}

	if (session.status === "unauthenticated") {
		router?.push("/dashboard/login");
	}

	const handleSubmit = async (e) => {
		e.preventDefault();

		const title = e.target[0].value;
		const desc = e.target[1].value;
		const imgUrl = e.target[2].value;
		const content = e.target[3].value;

		try {
			await fetch("api/posts", {
				method: "POST",
				body: JSON.stringify({
					title,
					desc,
					imgUrl,
					content,
					username: session.data.user.name,
				}),
			});
			mutate();
			e.target.reset();
		} catch (err) {
			throw new Error(err);
		}
	};

	const handleDelete = async (id) => {
		try {
			await fetch(`api/posts/${id}`, {
				method: "DELETE",
			});
			mutate();
		} catch (err) {
			console.log(err);
		}
	};

	if (session.status === "authenticated") {
		return (
			<div className={styles.container}>
				<div className={styles.posts}>
					<h1>My Posts</h1>
					{data?.length === 0 && (
						<p className={styles.noPost}>
							No post has been created yet
						</p>
					)}
					{isLoading
						? "Loading..."
						: data?.map((post) => (
								<div className={styles.post} key={post.id}>
									<div className={styles.imgContainer}>
										<Image
											src={post.img}
											alt="Post image"
											width={100}
											height={70}
										/>
									</div>
									<h2 className={styles.postTitle}>
										{post.title}
									</h2>
									<span
										className={styles.delete}
										onClick={() => handleDelete(post.id)}>
										X
									</span>
								</div>
						  ))}
				</div>
				<form className={styles.newPost} onSubmit={handleSubmit}>
					<h1>Add New Post</h1>
					<input
						type="text"
						placeholder="Title"
						className={styles.input}
					/>
					<input
						type="text"
						placeholder="Description"
						className={styles.input}
					/>
					<input
						type="text"
						placeholder="Image URL"
						className={styles.input}
					/>
					<textarea
						className={styles.content}
						placeholder="Content"
						cols="30"
						rows="10"></textarea>
					<button className={styles.button}>Create</button>
				</form>
			</div>
		);
	}
};

export default Dashboard;
