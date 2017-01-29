export class Image {
	small: string;
	large: string;
	thumb: string;
};

export class Name {
	first: string;
	middle: string;
	last: string;
};

export class Birth {
	year: number;
	month: number;
	day: number;
};

export class Contact {
	name: string;
	title: string;
	link: string;
};

export class Personal {
	image: Image[];
	name: Name;
	birth: Birth;
	contacts: Contact[];
};
