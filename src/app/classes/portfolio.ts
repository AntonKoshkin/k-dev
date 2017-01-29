export class PortfolioImage {
	small: string;
	large: string;
}

export class PortfolioLink {
	place: string;
	link: string;
}

export class PortfolioTextBlock {
	title: string;
	paragraph: string;
}

export class PortfolioItem {
	image: PortfolioImage;
	title: string;
	description: PortfolioTextBlock[];
	links: PortfolioLink[];
};
