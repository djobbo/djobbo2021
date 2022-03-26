import styles from './Contact.module.scss';
import { Button } from '~components/Button';
import { IconGroup } from '~components/IconGroup';
import { techIcons } from '~util/icons';

export const Contact = () => {
	return (
		<div className={styles.contact}>
			<div className={styles.content}>
				<p>Want to work with me? Let me know what I can do for you!</p>
				<Button href='mailto:hi@djobbo.com' style='Primary'>
					Email me
				</Button>
			</div>
			<IconGroup
				icons={[
					{
						title: '/djobbo',
						icon: techIcons.github,
						link: {
							href: 'https://github.com/djobbo',
							external: true,
						},
					},
					{
						title: '/in/djobbo',
						icon: techIcons.linkedin,
						link: {
							href: 'https://linkedin.com/in/djobbo',
							external: true,
						},
					},
					{
						title: 'hi@djobbo.com',
						icon: techIcons.gmail,
						link: {
							href: 'mailto:hi@djobbo.com',
						},
					},
				]}
			/>
		</div>
	);
};
