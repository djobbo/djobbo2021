import { FC, ReactNode } from 'react';
import styles from './index.module.scss';

interface Props {
	children: ReactNode;
	title: string;
	icon: ReactNode;
}

export const Section: FC<Props> = ({ children, title, icon }) => (
	<section className={styles.section}>
		<h2 className={styles.title}>
			<div className={styles.icon}>{icon}</div>
			<svg
				className={styles.arrow}
				xmlns='http://www.w3.org/2000/svg'
				width='0.5rem'
				viewBox='0 0 100 100'
			>
				<polygon points='86.603, 50 0,0 0, 100' />
			</svg>
			{title}
		</h2>
		{children}
	</section>
);
