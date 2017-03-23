export class ProjectImage {
	alt: string;
	large: string;
	small: string;
	main: boolean;
}

class ProjectLink {
	link: string;
	place: string;
}

// class ProjectTextBlock {
// 	paragraph: string;
// 	title: string;
// }

export class Project {
	description: string;
	descriptionFull: string;
	// descriptions: ProjectTextBlock[];
	id: number;
	images: ProjectImage[];
	links: ProjectLink[];
	mainImage: ProjectImage;
	name: string;
	title: string;
};

export class PortfolioItem {
	description: string;
	image: ProjectImage;
	name: string;
	title: string;
};
