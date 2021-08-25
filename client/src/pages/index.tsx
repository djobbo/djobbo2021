import { Header } from '~components/Header';
import { Landing } from '~components/Landing';
import { navLinks } from '~util/navigation';
import styles from '~styles/Home.module.scss';
import { SkillGroup } from '~components/SkillGroup';
import { skills } from '~data/skills';
import { ProjectGroup } from '~components/ProjectGroup/ProjectGroup';
import { About } from '~components/About';
import { useScrollAnchor } from '~hooks/useScrollAnchor';
import { projects } from '~data/projects';

export default function HomePage() {
	const [
		[
			aboutSectionRef,
			skillsSectionRef,
			projectsSectionRef,
			contactSectionRef,
		],
		currentSection,
	] = useScrollAnchor(
		['about', 'skills', 'projects', 'contact'],
		'home',
		120
	);

	return (
		<div className={styles.wrapper}>
			<Header navLinks={navLinks} currentSection={currentSection} />
			<Landing />
			<section
				className={styles.section}
				id='about'
				ref={aboutSectionRef}
			>
				<div className={styles.sectionContent}>
					<h2 className={styles.sectionTitle}>About me</h2>
					<About />
				</div>
			</section>
			<section
				className={`${styles.section} ${styles.alt}`}
				id='skills'
				ref={skillsSectionRef}
			>
				<div className={styles.sectionContent}>
					<h2 className={styles.sectionTitle}>Skills</h2>
					<SkillGroup skills={skills} />
				</div>
			</section>
			<hr className={styles.sectionSeparator} />
			<section
				className={`${styles.section} ${styles.alt}`}
				id='projects'
				ref={projectsSectionRef}
			>
				<div className={styles.sectionContent}>
					<h2 className={styles.sectionTitle}>Projects</h2>

					<ProjectGroup projects={projects} />
				</div>
			</section>
			<section
				className={styles.section}
				id='contact'
				ref={contactSectionRef}
			>
				<div className={styles.sectionContent}>
					<h2 className={styles.sectionTitle}>Contact</h2>
				</div>
			</section>
		</div>
	);
}
