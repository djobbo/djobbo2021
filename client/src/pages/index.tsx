import { Header } from '~components/Header';
import { Landing } from '~components/Landing';
import { navLinks } from '~util/navigation';
import styles from '~styles/Home.module.scss';
import { SkillGroup } from '~components/SkillGroup';
import { skills } from '~data/skills';
import { ProjectGroup } from '~components/ProjectGroup/ProjectGroup';
import { About } from '~components/About';
import { projects } from '~data/projects';
import Head from 'next/head';
import { Section } from '~components/Section';
import { ScrollSectionsProvider } from '~providers/ScrollSectionsProvider';

export default function HomePage() {
	return (
		<ScrollSectionsProvider defaultSection='home' scrollOffset={120}>
			<Head>
				<title>Djobbo-Victor Maïga-Monsallier</title>
			</Head>
			<div className={styles.wrapper}>
				<Header navLinks={navLinks} />
				<Landing />
				<Section id='about' title='About me'>
					<About />
				</Section>
				<Section title='Skills' id='skills' altBackground>
					<SkillGroup skills={skills} />
				</Section>
				<hr className={styles.sectionSeparator} />
				<Section id='projects' title='Projects' altBackground>
					<ProjectGroup projects={projects} />
				</Section>
				<Section id='contact' title='Contact'>
					<></>
				</Section>
			</div>
		</ScrollSectionsProvider>
	);
}
