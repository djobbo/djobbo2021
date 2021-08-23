export interface NavLink {
	id: string;
	title: string;
	href: string;
}

export const navLinks: NavLink[] = [
	{
		id: 'home',
		title: 'Home',
		href: '#',
	},
	{
		id: 'about',
		title: 'About',
		href: '#about',
	},
	{
		id: 'skills',
		title: 'Skills',
		href: '#skills',
	},
	{
		id: 'projects',
		title: 'Projects',
		href: '#projects',
	},
	{
		id: 'contact',
		title: 'Contact',
		href: '#contact',
	},
];
