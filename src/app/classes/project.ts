class ProjectImage {
	small: string;
	large: string;
	alt  : string;
}

class ProjectLink {
	place: string;
	link: string;
}

class ProjectTextBlock {
	title: string;
	paragraph: string;
}

export class Project {
	id: number;
	images: ProjectImage[];
	title: string;
	pathName: string;
	description: string;
	descriptions: ProjectTextBlock[];
	links: ProjectLink[];
};

export class PortfolioItem {
	id: number;
	image: ProjectImage;
	title: string;
	pathName: string;
	description: string;
	link: string;
};