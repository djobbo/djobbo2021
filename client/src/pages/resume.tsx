import { Heading } from '~components/Resume/Heading';
import { IconGrid } from '~components/Resume/IconGrid';
import { Section } from '~components/Resume/Section';
import { SubSection } from '~components/Resume/SubSection';
import styles from '~styles/Resume.module.scss';
import { generalIcons, techIcons } from '~util/icons';

export default function Home() {
	return (
		<>
			<div className={styles.page}>
				<div>
					<Heading
						firstname='Djobbo-Victor'
						lastname='Maiga-Monsallier'
						titles={['Frontend & Backend Development', 'UI Design']}
					/>
					<Section title='À propos' icon={generalIcons.person}>
						<SubSection title='Qui suis-je ?'>
							<p>
								Je suis un développeur Fullstack, avec un focus
								sur le Frontend et le design d'interfaces et
								d'expériences utilisateurs. J'utilise le
								Javascript, le Typescript, NodeJS et React au
								quotidien. Je suis en plein apprentissage de
								Solidity, pour créer des smart contracts sur la
								blockchain Ethereum.
							</p>
							<ul>
								<li>
									{techIcons.gmail}
									djobbo.maiga@gmail.com
								</li>
								<li>{generalIcons.globe} dvmm.dev</li>
								<li>
									{techIcons.github} github.com/AlfieGoldson
								</li>
								<li>
									{techIcons.linkedin} linkedin.com/in/dvmm
								</li>
							</ul>
						</SubSection>
					</Section>
					<Section
						title='Expérience et Projets Personnels'
						icon={generalIcons.suitcase}
					>
						<SubSection title='Développeur Fullstack'>
							<strong>@Corehalla</strong> (depuis 2019) <br />
							<a href='http://corehalla.com' target='_blank'>
								http://corehalla.com
							</a>{' '}
							|{' '}
							<a
								href='https://neue.corehalla.com'
								target='_blank'
							>
								https://neue.corehalla.com
							</a>
							<br />
							Site de statistiques et classements pour le jeu
							Brawlhalla.
							<ul>
								<li>
									Dévelopement complet du site avec React,
									Next.js, Typescript, Sass, Framer Motion et
									l'API REST de Brawlhalla.
								</li>
								<li>
									Création d'un bot Discord en utilisant
									NodeJS, Typescript et Discord.js.
								</li>
							</ul>
						</SubSection>
						<SubSection title='Développeur Fullstack'>
							<strong>@BuckoGraphics</strong> (depuis janvier
							2021)
							<br />
							<a href='https://bucko.graphics' target='_blank'>
								https://bucko.graphics
							</a>
							<br />
							Startup de design, branding et création de logos.
							<ul>
								<li>
									Dévelopement du portfolio avec React,
									Next.js, Typescript, Sass, Framer Motion,
									Prismic CMS et GraphQL
								</li>
								<li>
									Création d'un bot Discord en utilisant
									NodeJS, Typescript et Discord.js.
								</li>
							</ul>
						</SubSection>
						<SubSection title='Développeur Web & UI/UX Designer Freelance'>
							Association{' '}
							<strong>@Brawlhalla French Lobby</strong> (depuis
							octobre 2020)
							<br />
							<a href='https://bfl.corehalla.com' target='_blank'>
								https://bfl.corehalla.com
							</a>
							<br />
							Association ayant pour but de promouvoir l'Esport en
							France.
							<ul>
								<li>
									Réalisation du site internet avec React,
									Next.js, Typescript, Sass, Contentful CMS et
									GraphQL.
								</li>
								<li>
									Organisation d'événements en ligne et design
									de marchandise officielle (T-shirts et
									Maillots Esport).
								</li>
							</ul>
						</SubSection>
						{/* <SubSection title='Développeur Freelance'>
							<strong>@Global Breakout</strong> (janvier 2021 -
							avril 2021)
							<ul>
								<li>
									Dévelopement d'une extension pour la
									platforme de streaming Twitch.tv utilisant
									le stack: React, Typescript, NodeJS,
									TwitchAPI.
								</li>
							</ul>
						</SubSection> */}
						<SubSection title='Entraîneur de Gymnastique Artistique Masculine'>
							<strong>@Étoile Alençonnaise</strong> (2012 - 2016)
						</SubSection>
						<SubSection
							title={
								<>
									Voir plus sur mon portfolio:{' '}
									<strong>
										<a href='https://dvmm.dev'>
											https://dvmm.dev
										</a>
									</strong>
								</>
							}
						></SubSection>
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
									{
										name: 'Express',
										icon: techIcons.express,
									},
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
					<Section
						title='Formation et Diplômes'
						icon={generalIcons.gradCap}
					>
						<SubSection
							title={
								<>
									<strong>Licence Mathématiques</strong>{' '}
									@UNICAEN (Actuellement)
								</>
							}
						/>
						<SubSection
							title={
								<>
									<strong>Permis B</strong>, obtenu en 2017.
								</>
							}
						/>
						<SubSection
							title={
								<>
									<strong>Baccalauréat Scientifique</strong>{' '}
									mention Bien, obtenu en 2017.
								</>
							}
						/>
						<SubSection
							title={
								<>
									<strong>Diplôme National du Brevet</strong>{' '}
									mention Très Bien, obtenu en 2014.
								</>
							}
						/>
						<SubSection
							title={
								<>
									<strong>
										Diplôme de juge en Gymnastique
										Artistique Masculine
									</strong>
									, obtenu en 2011.
								</>
							}
						/>
					</Section>

					<Section
						title='Autres Compétences'
						icon={generalIcons.puzzle}
					>
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
								<li>
									Gymnastique Artistique (Niveau National)
								</li>
								<li>Logo Design</li>
								<li>Jeux Vidéos</li>
							</ul>
						</SubSection>
					</Section>
				</div>
			</div>
			<p className={styles.footer}>
				CV généré avec NextJS + React + Playwright. Code Source:
				github.com/AlfieGoldson/AlfieGoldson
			</p>
		</>
	);
}
