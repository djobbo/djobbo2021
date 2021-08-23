export interface Project {
	name: string;
	tags: string[];
	description: string;
	featured?: boolean;
	link?: string;
	code?: string;
	images: { src: string; alt: string }[];
}
