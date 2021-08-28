import { Icon, IconData } from './Icon';
import styles from './IconGroup.module.scss';

interface Props {
	icons: IconData[];
}

export const IconGroup = ({ icons }: Props) => {
	return <div className={styles.skillGroup}>{icons.map(Icon)}</div>;
};
