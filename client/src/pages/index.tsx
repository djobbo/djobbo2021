import { Heading } from '~components/Heading';
import { IconGrid } from '~components/IconGrid';
import { Section } from '~components/Section';
import { SubSection } from '~components/SubSection';
import styles from '~styles/Home.module.scss';
import { generalIcons, techIcons } from '~util/icons';

export default function Home() {
	return (
		<div className={styles.page}>
			<div>
				<Heading
					firstname='Djobbo-Victor'
					lastname='Maiga-Monsallier'
					titles={['Développement Web Fullstack', 'Design UI/UX']}
				/>
				<Section title='À propos' icon={generalIcons.person}>
					<SubSection>
						<p>
							Je suis un développeur Fullstack, avec un focus sur
							le Frontend et le design d'interfaces et
							d'expériences utilisateurs. J'utilise le Javascript,
							le Typescript, NodeJS et React au quotidien. Je suis
							en plein apprentissage de Solidity, pour créer des
							smart contracts sur la blockchain Ethereum.
						</p>
					</SubSection>
				</Section>
				<Section
					title='Expérience et Projets Personnels'
					icon={generalIcons.suitcase}
				>
					<SubSection title='Développeur Web & UI/UX Designer Freelance'>
						Association <strong>@Brawlhalla French League</strong>{' '}
						(depuis octobre 2020)
						<ul>
							<li>
								Création de la maquette du site internet avec
								Adobe XD et dévelopment des user-stories.
							</li>
							<li>
								Réalisation (en cours) du site web en utilisant
								le stack suivant: React, Next.js, Typescript,
								Sass, Contentful et GraphQL.
							</li>
							<li>
								Design de marchandise officielle (T-shirts et
								Maillots Esport).
							</li>
							<li>
								Organisation d'événements en ligne: concours et
								tournois esportifs.
							</li>
						</ul>
					</SubSection>
					<SubSection title='Développeur Freelance'>
						<strong>@Global Breakout</strong> (janvier 2021 - avril
						2021)
						<ul>
							<li>
								Dévelopement d'une extension pour la platforme
								de streaming Twitch.tv utilisant le stack:
								React, Typescript, NodeJS, TwitchAPI.
							</li>
							<li>
								Création d'un robot Discord pour gérer le
								serveur Discord.
							</li>
						</ul>
					</SubSection>
					<SubSection title='Corehalla (Projet Personnel)'>
						Site de statistiques et classements pour le jeu
						Brawlhalla.
						<ul>
							<li>
								Création de la maquette du site internet avec
								Adobe XD et dévelopment des user-stories.
							</li>
							<li>
								Réalisation (en cours) du site web en utilisant
								le stack suivant: React, Next.js, Typescript,
								Sass, Framer Motion et l'API REST de Brawlhalla.
								<br />
								Une ancienne version est actuellement utilisée
								publiquement, cette version utilise le stack:
								NodeJS, Express, EJS, JQuery.
							</li>
							<li>
								Création d'un robot Discord en utilisant NodeJS,
								Typescript et Discord.js.
							</li>
						</ul>
					</SubSection>
					<SubSection title='Entraîneur de Gymnastique Artistique Masculine'>
						<strong>@Étoile Alençonnaise</strong> (2012 - 2016)
					</SubSection>
				</Section>
				<Section
					title='Formation et Diplômes'
					icon={generalIcons.gradCap}
				>
					<SubSection>
						<strong>Permis B</strong>, obtenu en 2017.
					</SubSection>
					<SubSection>
						<strong>Baccalauréat Scientifique</strong> mention Bien,
						obtenu en 2017.
					</SubSection>
					<SubSection>
						<strong>Diplôme National du Brevet</strong> mention Très
						Bien, obtenu en 2014.
					</SubSection>
					<SubSection>
						<strong>
							Diplôme de juge en Gymnastique Artistique Masculine
						</strong>
						, obtenu en 2011.
					</SubSection>
				</Section>
			</div>
			<div>
				<Section title='Mon Tech Stack' icon={generalIcons.code}>
					<SubSection title='Langages'>
						<IconGrid
							icons={[
								{ name: 'HTML5', icon: techIcons.html },
								{ name: 'CSS3', icon: techIcons.css },
								{ name: 'JavaScript', icon: techIcons.js },
								{ name: 'TypeScript', icon: techIcons.ts },
								{ name: 'SCSS/SASS', icon: techIcons.scss },
								{ name: 'Python', icon: techIcons.py },
								{ name: 'C Sharp', icon: techIcons.cs },
								{ name: 'GraphQL', icon: techIcons.gql },
								{ name: 'Solidity', icon: techIcons.sol },
								{
									name: 'Shopify Liquid',
									icon: techIcons.liquid,
								},
							]}
						/>
					</SubSection>
					<SubSection title='Librairies / Frameworks'>
						<IconGrid
							icons={[
								{ name: 'NodeJS', icon: techIcons.nodejs },
								{ name: 'React', icon: techIcons.react },
								{ name: 'NextJS', icon: techIcons.nextjs },
								{ name: 'Vue', icon: techIcons.vue },
								{ name: 'Svelte', icon: techIcons.svelte },
								{ name: 'Express', icon: techIcons.express },
								{
									name: 'Styled Components',
									icon: techIcons.styledComponents,
								},
								{
									name: 'Framer Motion',
									icon: techIcons.framerMotion,
								},
								{ name: 'Jest', icon: techIcons.jest },
								{
									name: 'Storybook',
									icon: techIcons.storybook,
								},
								{ name: 'Flask', icon: techIcons.flask },
								{ name: 'Pillow', icon: techIcons.py },
							]}
						/>
					</SubSection>
					<SubSection title='Outils / Logiciels'>
						<IconGrid
							icons={[
								{ name: 'VS Code', icon: techIcons.vscode },
								{ name: 'Vim', icon: techIcons.vim },
								{ name: 'Adobe XD', icon: techIcons.xd },
								{
									name: 'Adobe Photoshop',
									icon: techIcons.photoshop,
								},
								{
									name: 'Adobe Illustrator',
									icon: techIcons.illustrator,
								},
								{ name: 'Markdown', icon: techIcons.md },
								{ name: 'Git', icon: techIcons.git },
								{ name: 'Github', icon: techIcons.github },
							]}
						/>
					</SubSection>
				</Section>

				<Section title='Autre Compétences' icon={generalIcons.puzzle}>
					<SubSection title='Langues'>
						<ul>
							<li>Français - Langue Natale</li>
							<li>Anglais - Confirmé</li>
							<li>Langue Des Signes Française - Débutant</li>
							<li>Allemand - Débutant</li>
						</ul>
					</SubSection>
					<SubSection title="Centres d'Intérêts">
						<ul>
							<li>Guitare</li>
							<li>Gymnastique Artistique (Niveau National)</li>
							<li>Logo Design</li>
							<li>Jeux Vidéos</li>
						</ul>
					</SubSection>
				</Section>
			</div>
		</div>
	);
}
