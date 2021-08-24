import styles from './Project.module.scss';
import { Project as Props } from '~data/projects';
import { TagGroup } from '~components/TagGroup';
import { Button } from '~components/Button';
import Image from 'next/image';

export const Project = ({
	name,
	tags,
	description,
	link,
	code,
	images,
	featured = false,
}: Props) => {
	return (
		<div className={`${styles.project} ${featured ? styles.featured : ''}`}>
			{featured && (
				<span className={styles.featuredText}>
					Currently working on
				</span>
			)}
			<div>
				{images.length > 0 && (
					<Image
						className={styles.thumb}
						src={images[0].src}
						alt={images[0].alt}
						width={16}
						height={9}
						layout='responsive'
						quality={100}
						placeholder='empty'
					/>
				)}
				<p className={styles.title}>{name}</p>
				<TagGroup tags={tags} />
				<p className={styles.description}>{description}</p>
			</div>
			<div className={styles.ctaGroup}>
				{link && (
					<Button href={link} style='Primary' external>
						Visit
					</Button>
				)}
				{code && (
					<Button href={code} external>
						Code
					</Button>
				)}
			</div>
		</div>
	);
};
