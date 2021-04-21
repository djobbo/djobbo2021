import { FC, ReactNode } from 'react';
import styles from './index.module.scss';

interface Props {
	icons: { name: string; icon: ReactNode }[];
}

export const IconGrid: FC<Props> = ({ icons }) => (
	<div className={styles.iconGrid}>
		{icons.map((icon, i) => (
			<div key={i} className={styles.techIcon}>
				{icon.icon}
				{icon.name}
			</div>
		))}
	</div>
);
