import styles from './Tag.module.scss';

interface Props {
	title: string;
}

export const Tag = ({ title }: Props) => {
	return <span className={styles.tag}>{title}</span>;
};
