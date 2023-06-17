import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";

const About = () => {
	return (
		<div className={styles.container}>
			<div className={styles.ImageContainer}>
				<Image
					src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
					fill={true}
					alt="About Image"
					className={styles.img}
				/>
				<div className={styles.imgText}>
					<h1 className={styles.imgTitle}>Digital Storytellers</h1>
					<h2 className={styles.imgDesc}>
						Handcrafting award winning digital experiences
					</h2>
				</div>
			</div>
			<div className={styles.textContainer}>
				<div className={styles.item}>
					<h1 className={styles.title}>Who Are We?</h1>
					<p className={styles.desc}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Delectus dicta incidunt, numquam ad excepturi suscipit
						voluptatibus sed, quibusdam error commodi obcaecati
						necessitatibus nostrum quisquam itaque exercitationem.
						<br />
						<br />
						Officia corrupti magnam repellat quos maiores, tempore
						voluptate ullam, tenetur, impedit consectetur minus nemo
						excepturi architecto incidunt quasi? Delectus nulla quae
						quod voluptatibus fugit. Lorem ipsum dolor sit amet,
						consectetur adipisicing elit. Nam eveniet,
						exercitationem reiciendis numquam vitae deserunt.
					</p>
				</div>
				<div className={styles.item}>
					<h1 className={styles.title}>Who We Do?</h1>
					<p className={styles.desc}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Delectus dicta incidunt, numquam ad excepturi suscipit
						voluptatibus sed, quibusdam error commodi obcaecati
						necessitatibus nostrum quisquam itaque exercitationem.
						<br />
						<br />
						- Dynaminc Websites
						<br />
						<br />
						- Fast and Handy Mobile Experience
						<br />
						<br />- Fast and Handy Mobile Experience
					</p>
					<Button url="/contact" text="Contact" />
				</div>
			</div>
		</div>
	);
};

export default About;
