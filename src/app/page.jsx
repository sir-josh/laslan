"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Hero from "/public/hero.png";
import Button from "@/components/button/Button";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Home() {
	const { mode } = useContext(ThemeContext);

	return (
		<main className={styles.container}>
			<div className={styles.item}>
				<h1
					className={styles.title}
					style={
						mode === "light"
							? {
									background:
										"linear-gradient(to bottom, #194c33 40%, #000000)",
									backgroundClip: "text",
									WebkitBackgroundClip: "text",
									WebkitTextFillColor: "transparent",
							  }
							: {}
					}>
					Better design for your digital products.
				</h1>
				<p className={styles.desc}>
					Turning your Idea to Reality. We bring together team from
					the global tech industry.
				</p>
				<Button url="/portfolio" text="See Our Works" />
			</div>
			<div className={styles.item}>
				<Image
					src={Hero}
					alt="Hero background image"
					className={styles.img}
				/>
			</div>
		</main>
	);
}
