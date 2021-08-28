import Link from 'next/link';
import { ReactNode } from 'react';
import styles from './Icon.module.scss';

export interface IconData {
	title: string;
	icon: ReactNode;
	link?: {
		href: string;
		external?: boolean;
	};
}

export const Icon = ({ title, icon, link }: IconData) => {
	if (!link)
		return (
			<div className={styles.icon}>
				{icon}
				<p className={styles.title}>{title}</p>
			</div>
		);

	const { href, external } = link;

	return (
		<Link href={href}>
			<a className={styles.icon} target={external ? '_blank' : undefined}>
				{icon}
				<p className={styles.title}>{title}</p>
			</a>
		</Link>
	);
};
