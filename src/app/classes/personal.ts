export class PersonalImage {
	small: string;
	large: string;
	thumb: string;
	isMain: boolean;
};

export class Contact {
	name: string;
	title: string;
	link: string;
};

export class Personal {
	age: number;
	about: string;
	birth: Date;
	city: string;
	contacts: Contact[];
	images: PersonalImage[];
	mail: string;
	name: string;
	phone: string;
	skills: {
		name: string;
		level: number;
	};
};
