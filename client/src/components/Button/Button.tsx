import Link from 'next/link';
import { ReactNode } from 'react';
import styles from './Button.module.scss';

type ButtonStyle = 'Primary' | 'Secondary';

interface Props {
	children: ReactNode;
	style?: ButtonStyle;
	href: string;
	external?: boolean;
}

export const Button = ({
	style = 'Secondary',
	href,
	children,
	external = false,
}: Props) => {
	return (
		<Link href={href}>
			<a
				className={`${styles.button} ${styles[style]}`}
				target={external ? '__blank' : '__self'}
			>
				{children}
			</a>
		</Link>
	);
};
