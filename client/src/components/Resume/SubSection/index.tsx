import { FC, ReactNode } from 'react';
import styles from './index.module.scss';

interface Props {
	children?: ReactNode;
	title?: ReactNode;
}

export const SubSection: FC<Props> = ({ children, title }) => (
	<div className={styles.subsection}>
		<div className={styles.bullet}>
			{children && (
				<svg
					viewBox='0 0 42 32'
					xmlns='http://www.w3.org/2000/svg'
					className={styles.branch}
					vectorEffect='non-scaling-stroke'
					strokeLinecap='round'
				>
					<path d='M0,0 Q0,16 8,16 L32,16 Q42,16 40,32' />
				</svg>
			)}
		</div>
		{title && (
			<h3
				className={`${styles.subtitle} ${
					children ? '' : styles.nocontent
				}`}
			>
				{title}
			</h3>
		)}

		{children && (
			<div
				className={`${styles.content} ${title ? '' : styles.untitled}`}
			>
				{children}
			</div>
		)}
	</div>
);
