import { Skill as SkillProps } from '~data/skills';
import { Skill } from './Skill';
import styles from './SkillGroup.module.scss';

interface Props {
	skills: SkillProps[];
}

export const SkillGroup = ({ skills }: Props) => {
	return <div className={styles.skillGroup}>{skills.map(Skill)}</div>;
};
