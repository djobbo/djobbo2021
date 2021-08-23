import { Project as ProjectProps } from '~data/projects';
import { Project } from './Project/Project';
import styles from './ProjectGroup.module.scss';

interface Props {
	projects: ProjectProps[];
}

export const ProjectGroup = ({ projects }: Props) => {
	return <div className={styles.projectGroup}>{projects.map(Project)}</div>;
};
