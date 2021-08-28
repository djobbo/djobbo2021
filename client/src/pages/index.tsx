import { Header } from '~components/Header';
import { Landing } from '~components/Landing';
import { navLinks } from '~util/navigation';
import styles from '~styles/Home.module.scss';
import { IconGroup } from '~components/IconGroup';
import { skills } from '~data/skills';
import { ProjectGroup } from '~components/ProjectGroup/ProjectGroup';
import { About } from '~components/About';
import { projects } from '~data/projects';
import Head from 'next/head';
import { Section } from '~components/Section';
import { ScrollSectionsProvider } from '~providers/ScrollSectionsProvider';
import { Button } from '~components/Button';
import { Footer } from '~components/Footer';
import { techIcons } from '~util/icons';
import { Contact } from '~components/Contact';

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
					<IconGroup icons={skills} />
				</Section>
				<hr className={styles.sectionSeparator} />
				<Section id='projects' title='Projects' altBackground>
					<ProjectGroup projects={projects} />
				</Section>
				<Section id='contact' title='Contact'>
					<Contact />
				</Section>
				<Section id='footer'>
					<Footer />
				</Section>
			</div>
		</ScrollSectionsProvider>
	);
}
