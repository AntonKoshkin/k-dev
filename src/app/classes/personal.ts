class Image {
	small: string;
	large: string;
	thumb: string;
};

class Contact {
	name: string;
	title: string;
	link: string;
};

export class Personal {
	image: Image[];
	name: string;
	mail: string;
	phone: string;
	age: number;
	city: string;
	contacts: Contact[];
	about: string;
};
