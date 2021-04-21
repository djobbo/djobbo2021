import { FC, ReactNode } from 'react';
import styles from './index.module.scss';

interface Props {
	children: ReactNode;
	title?: string;
}

export const SubSection: FC<Props> = ({ children, title }) => (
	<div className={styles.subsection}>
		<div className={styles.bullet} />
		<div className={styles.content}>
			{title && <h3 className={styles.subtitle}>{title}</h3>}
			{children}
		</div>
	</div>
);
