import styles from './Contact.module.scss';
import { Button } from '~components/Button';
import { IconGroup } from '~components/IconGroup';
import { techIcons } from '~util/icons';

export const Contact = () => {
	return (
		<div className={styles.contact}>
			<div className={styles.content}>
				<p>Want to work with me? Let me know what I can do for you!</p>
				<Button href='mailto:hi@dvmm.dev' style='Primary'>
					Email me
				</Button>
			</div>
			<IconGroup
				icons={[
					{
						title: '/AlfieGoldson',
						icon: techIcons.github,
						link: {
							href: 'https://github.com/AlfieGoldson',
							external: true,
						},
					},
					{
						title: '/in/dvmm',
						icon: techIcons.linkedin,
						link: {
							href: 'https://linkedin.com/in/dvmm',
							external: true,
						},
					},
					{
						title: 'hi@dvmm.dev',
						icon: techIcons.gmail,
						link: {
							href: 'mailto:hi@dvmm.dev',
						},
					},
				]}
			/>
		</div>
	);
};
