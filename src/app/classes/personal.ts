export class Image {
	small: String;
	large: String;
};

export class Name {
	first: String;
	middle: String;
	last: String;
};

export class Birth {
	year: Number;
	month: Number;
	day: Number;
};

export class Contact {
	name: String;
	title: String;
	link: String;
};

export class Personal {
	images: Image[];
	name: Name;
	birth: Birth;
	contacts: Contact[];
};
