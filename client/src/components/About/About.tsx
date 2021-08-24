import styles from './About.module.scss';

export const About = () => {
	return (
		<div className={styles.about}>
			<div className={styles.content}>
				<p className={styles.subtitle}>
					Solution Designer <span className={styles.separator} />
				</p>
				<p>
					I love solving problems and finding clean and simple
					solutions.
				</p>
			</div>
			<div></div>
		</div>
	);
};
