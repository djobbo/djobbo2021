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
			{chunks.map((chunk, i) => (
				<div className={styles.tabGroup} key={i}>
					{chunk.map((tag) => (
						<Tag title={tag} key={tag} />
					))}
				</div>
			))}
		</>
	);
};
