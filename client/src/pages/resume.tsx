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
					<Section title='About me' icon={generalIcons.person}>
						<SubSection title='Who am I ?'>
							<p>
								I'm a Fullstack developer focusing on Frontend
								and UI Design. I use NextJS, React, NodeJS and
								Typescript daily to build visually appealing and
								accessible applications.
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
					<Section title='Experience' icon={generalIcons.suitcase}>
						<SubSection title='Fullstack Developer'>
							<strong>@Corehalla</strong> (since 2019) <br />
							Statistics and Rankings website for the Fighting
							Game <strong>Brawlhalla</strong>.
							<br />
							<i>
								<a href='http://corehalla.com' target='_blank'>
									corehalla.com
								</a>
								<br />
								<a
									href='https://neue.corehalla.com'
									target='_blank'
								>
									neue.corehalla.com
								</a>
							</i>
							<ul>
								<li>
									Complete website overhaul using React,
									NextJS, Typescript, Sass, Framer Motion and
									Brawlhalla's REST API.
								</li>
								<li>
									Use of NodeJS, Typescript et Discord.js to
									build a Discord bot.
								</li>
							</ul>
						</SubSection>
						<SubSection title='Freelance Fullstack Developer'>
							<strong>@BuckoGraphics</strong> (since january 2021)
							<br />
							Logo Design Startup.
							<br />
							<i>
								<a
									href='https://bucko.graphics'
									target='_blank'
								>
									bucko.graphics
								</a>
							</i>
							<ul>
								<li>
									Portfolio development with React, NextJS,
									Typescript, Sass, Framer Motion, Prismic CMS
									et GraphQL.
								</li>
							</ul>
						</SubSection>
						<SubSection title='Freelance Fullstack Developer'>
							Association{' '}
							<strong>@Brawlhalla French Lobby</strong> (since
							october 2020)
							<br />
							Esport association striving to promote Esport in
							France.
							<br />
							<i>
								<a
									href='https://bfl.corehalla.com'
									target='_blank'
								>
									bfl.corehalla.com
								</a>
							</i>
							<ul>
								<li>
									Creation of the Association's Blog using
									React, NextJS, Typescript, Scss, Contentful
									CMS and GraphQL.
								</li>
								<li>
									Setup of online events and fighting game
									tournaments.
								</li>
								<li>
									Merch Design (Shirts and Esport Jerseys.)
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
						<SubSection title="Men's Artistic Gymnastics Coach">
							<strong>@Étoile Alençonnaise</strong> (2012 - 2016)
						</SubSection>
						<SubSection
							title={
								<>
									View more projects on my portfolio:{' '}
									<strong>
										<a href='https://dvmm.dev'>dvmm.dev</a>
									</strong>
								</>
							}
						></SubSection>
					</Section>
				</div>
				<div>
					<Section title='My tech stack' icon={generalIcons.code}>
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
									{ name: 'Figma', icon: techIcons.figma },
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
					<Section title='Education' icon={generalIcons.gradCap}>
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

					<Section title='Other skills' icon={generalIcons.puzzle}>
						<SubSection title='Languages'>
							<ul>
								<li>French - Native Language</li>
								<li>English - Advanced</li>
								<li>French Sign Language - Beginner</li>
								<li>German - Beginner</li>
							</ul>
						</SubSection>
						<SubSection title='Hobbys'>
							<ul>
								<li>Guitar</li>
								<li>Artistic Gymnastics</li>
								<li>Logo Design</li>
								<li>Fighting Games</li>
							</ul>
						</SubSection>
					</Section>
				</div>
			</div>
			<p className={styles.footer}>
				Resume generated using NextJS, React and Playwright. Source:
				github.com/AlfieGoldson/AlfieGoldson
			</p>
		</>
	);
}
