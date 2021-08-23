import { Skill as Props } from '~data/skills';
import styles from './Skill.module.scss';

export const Skill = ({ title, icon }: Props) => {
	return (
		<div className={styles.skill}>
			{icon}
			<p className={styles.title}>{title}</p>
		</div>
	);
};
