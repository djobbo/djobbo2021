import styles from './TagGroup.module.scss';
import { Tag } from './Tag';
import { getChunks } from '~util/getChunks';

interface Props {
	tags: string[];
}

export const TagGroup = ({ tags }: Props) => {
	const chunks = getChunks(tags, 4);

	return (
		<>
			{chunks.map((chunk) => (
				<div className={styles.tabGroup}>
					{chunk.map((tag) => (
						<Tag title={tag} />
					))}
				</div>
			))}
		</>
	);
};
