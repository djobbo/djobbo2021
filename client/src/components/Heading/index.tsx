import { FC } from 'react';
import { dvmmLogo } from '~util/icons';
import styles from './index.module.scss';

interface Props {
	firstname: string;
	lastname: string;
	titles: string[];
}

export const Heading: FC<Props> = ({ firstname, lastname, titles }) => (
	<header className={styles.heading}>
		<div className={styles.leading}>
			<figure className={styles.logo}>
				{dvmmLogo}
				{/* <svg viewBox='0 0 10 10' width={64}>
					<title>Logo</title>
					<circle cx={5} cy={5} r={5} />
				</svg> */}
				<figcaption />
			</figure>
			<div>
				<h1 className={styles.firstname}>{firstname}</h1>
				<p className={styles.lastname}>{lastname}</p>
			</div>
		</div>
		<div className={styles.titles}>
			{titles.map((title, i) => (
				<p key={i} className={styles.title}>
					{title}
				</p>
			))}
		</div>
	</header>
);
