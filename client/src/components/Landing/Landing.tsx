import { Button } from '~components/Button';
import { TagGroup } from '~components/TagGroup';
import styles from './Landing.module.scss';
import Link from 'next/link';

export const Landing = () => {
	return (
		<div className={styles.landing}>
			<svg
				width='484'
				height='451'
				viewBox='0 0 484 451'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				className={styles.blob}
			>
				<path
					d='M426.357 25.4957C466.749 56.6807 482.49 122.318 483.381 188.846C484.569 255.671 470.907 323.387 430.515 372.392C389.826 421.694 322.11 452.285 256.473 449.909C191.133 447.83 127.872 412.784 78.2734 363.779C28.9714 314.477 -6.66865 251.216 1.05335 195.677C8.77535 139.841 59.5624 92.0237 108.864 60.5417C158.463 29.3567 206.28 14.8037 263.304 5.89371C320.031 -2.71929 385.668 -5.98629 426.357 25.4957Z'
					fill='#1C232E'
				/>
			</svg>

			<div className={styles.content}>
				<span className={styles.greeting}>Hi there 👋, I'm</span>
				<h1 className={styles.title}>
					Djobbo <span className={styles.titleAlt}>- Victor</span>
				</h1>
				<span className={styles.subtitle}>
					I build accessible and visually appealing applications.
				</span>
				<TagGroup tags={['Frontend', 'Backend', 'UI Design']} />
				<div className={styles.ctaGroup}>
					<Button href='#projects' style='Primary'>
						View my work
					</Button>
					<Button href='#contact'>Contact me</Button>
				</div>
			</div>

			<Link href='#about'>
				<a className={styles.scrollCta}>Scroll For More</a>
			</Link>
		</div>
	);
};
