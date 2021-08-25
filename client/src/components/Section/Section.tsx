import { ReactNode } from 'react';
import { useScrollSections } from '~providers/ScrollSectionsProvider';
import styles from './Section.module.scss';

interface Props {
	title: string;
	children: ReactNode;
	id: string;
	altBackground?: boolean;
}

export const Section = ({
	title,
	children,
	id,
	altBackground = false,
}: Props) => {
	const { addSection } = useScrollSections();

	return (
		<section
			className={`${styles.section} ${altBackground ? styles.alt : ''}`}
			id={id}
			ref={addSection(id)}
		>
			<div className={styles.sectionContent}>
				{title && <h2 className={styles.sectionTitle}>{title}</h2>}
				{children}
			</div>
		</section>
	);
};
