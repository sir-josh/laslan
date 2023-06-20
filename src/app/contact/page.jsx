import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";

export const metadata = {
	title: "Lanslan Contact Info",
	description: "This is Laslan contact page",
};


const Contact = () => {
	return (
		<div className={styles.container}>
			<div className={styles.title}>Let&apos;s Keep in Touch</div>
			<div className={styles.content}>
				<div className={styles.imgContainer}>
					<Image
						src="/contact.png"
						alt="form Image"
						fill={true}
						className={styles.img}
					/>
				</div>
				<form className={styles.contactForm}>
					<input
						type="text"
						placeholder="Name"
						className={styles.input}
					/>
					<input
						type="text"
						placeholder="Email"
						className={styles.input}
					/>
					<textarea
						placeholder="Message"
						className={styles.textArea}
						cols="30"
						rows="10"></textarea>
					<Button url="#" text="Send" />
				</form>
			</div>
		</div>
	);
};

export default Contact;
