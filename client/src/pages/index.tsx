import { Header } from '~components/Header';
import { Landing } from '~components/Landing';
import { navLinks } from '~util/navigation';
import styles from '~styles/Home.module.scss';
import { SkillGroup } from '~components/SkillGroup';
import { skills } from '~data/skills';
import { ProjectGroup } from '~components/ProjectGroup/ProjectGroup';
import { Project } from '~components/ProjectGroup/Project';

export default function HomePage() {
	return (
		<div className={styles.wrapper}>
			<Header navLinks={navLinks} />
			<Landing />
			<section className={styles.section} id='about'>
				<div className={styles.sectionContent}>
					<h2 className={styles.sectionTitle}>About me</h2>
				</div>
			</section>
			<section className={`${styles.section} ${styles.alt}`} id='skills'>
				<div className={styles.sectionContent}>
					<h2 className={styles.sectionTitle}>Skills</h2>
					<SkillGroup skills={skills} />
				</div>
			</section>
			<section
				className={`${styles.section} ${styles.alt}`}
				id='projects'
			>
				<div className={styles.sectionContent}>
					<h2 className={styles.sectionTitle}>Projects</h2>

					<Project
						name='Corehalla'
						description='Statistics website for the game Brawlhalla.'
						tags={[
							'React',
							'NextJS',
							'Typescript',
							'SCSS',
							'Supabase',
							'Brawlhalla API',
						]}
						images={[
							{
								src: '/images/projects/Corehalla.png',
								alt: 'Corehalla',
							},
						]}
						code='https://github.com/AlfieGoldson/CorehallaNeue'
						link='https://neue.corehalla.com'
						featured
					/>
					<ProjectGroup
						projects={[
							{
								name: 'Bucko Graphics',
								description:
									'Website for an upcoming design startup.',
								images: [
									{
										src: '/images/projects/BuckoGraphics.png',
										alt: 'Bucko Graphics',
									},
								],
								tags: [
									'React',
									'NextJS',
									'Typescript',
									'SCSS',
									'Prismic',
									'GraphQL',
								],
								link: 'https://bucko.graphics',
							},
							{
								name: 'Mokap',
								description:
									'Module to quickly create complex data structures in javascript and typescript.',
								images: [
									{
										src: '/images/projects/Ants.jpg',
										alt: 'Ants',
									},
								],
								tags: ['Typescript'],
								code: 'https://github.com/AlfieGoldson/Mokap',
							},
							{
								name: 'Fancy Discord',
								description:
									'Discord.js wrapper to build bots using JSX and Express like syntax.',
								images: [
									{
										src: '/images/projects/Ants.jpg',
										alt: 'Ants',
									},
								],
								tags: ['Typescript', 'Discord API'],
								code: 'https://github.com/AlfieGoldson/fancy-discord',
								link: 'https://www.npmjs.com/package/fancy-discord.js',
							},
							{
								name: 'Minecraft Gif Bundle',
								description:
									'Transforms .gif images into animated minecraft bundles.',
								images: [
									{
										src: '/images/projects/MCGifBundle.gif',
										alt: 'MC Gif Bundle',
									},
								],
								tags: ['Python', 'Pillow'],
								code: 'https://github.com/AlfieGoldson/MCGifBundle',
							},
							{
								name: 'Brawlhalla French League',
								description: 'Esport organization website.',
								images: [
									{
										src: '/images/projects/BFL.png',
										alt: 'Brawlhalla French League',
									},
								],
								tags: ['React', 'NextJS', 'Typescript', 'SCSS'],
								link: 'https://bfl.corehalla.com/',
							},
							{
								name: 'Landshape',
								description: 'Low Poly 3D Map and Tree Editor.',
								images: [
									{
										src: '/images/projects/Landshape.jpg',
										alt: 'Brawlhalla French League',
									},
								],
								tags: ['Unity', 'C#'],
								link: 'https://www.youtube.com/watch?v=03VXXnIR1Qk',
							},
							{
								name: 'Ants Simulator',
								description: 'Ant colony simulator.',
								images: [
									{
										src: '/images/projects/Ants.png',
										alt: 'Ants',
									},
								],
								tags: ['Python', 'Tkinter'],
								code: 'https://github.com/AlfieGoldson/Ants',
							},
						]}
					/>
				</div>
			</section>
			<section className={styles.section} id='contact'>
				<div className={styles.sectionContent}>
					<h2 className={styles.sectionTitle}>Contact</h2>
				</div>
			</section>
		</div>
	);
}
