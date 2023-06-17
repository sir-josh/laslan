"use client";
import { signIn, useSession } from "next-auth/react";
import styles from "./page.module.css";
import React, { useState } from "react";
import { useRouter } from "next/Navigation";

const Login = () => {
	// const [err, setErr] = useState(false);
	const session = useSession();
	const router = useRouter();
	
	if (session.status === "loading") {
		return <p>Loading...</p>;
	}

	if (session.status === "authenticated") {
		router?.push("/dashboard");
	}

	const handleSubmit = async (e) => {
		e.preventDefault();

		const email = e.target[0].value;
		const password = e.target[1].value;

		signIn("credentials", { email, password });
	};

	return (
		<div className={styles.container}>
			<form className={styles.form} onSubmit={handleSubmit}>
				<input
					type="email"
					placeholder="Email"
					className={styles.input}
					required
				/>
				<input
					type="password"
					placeholder="Password"
					className={styles.input}
					required
				/>
				<button className={styles.button}>Login</button>
				{/* {err && "Something went wrong"} */}

				<div className={styles.divider}>
					<hr className={styles.ruler} />
					<p>OR</p>
					<hr className={styles.ruler} />
				</div>
			</form>

			<button className={styles.signIn} onClick={() => signIn("google")}>
				Login With Google
			</button>
		</div>
	);
};

export default Login;
