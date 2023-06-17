import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
	return (
		<div className={styles.container}>
			<div>@2023 Lamamia. All Rights Reserved.</div>

			<div className={styles.socials}>
				<Image
					src="/1.png"
					alt="Josh dev facebook"
					width={15}
					height={15}
					className={styles.icon}
				/>
				<Image
					src="/2.png"
					alt="Josh dev instagram"
					width={15}
					height={15}
					className={styles.icon}
				/>
				<Image
					src="/3.png"
					alt="Josh dev twitter"
					width={15}
					height={15}
					className={styles.icon}
				/>
				<Image
					src="/4.png"
					alt="Josh dev youtube"
					width={15}
					height={15}
					className={styles.icon}
				/>
			</div>
		</div>
	);
};

export default Footer;
