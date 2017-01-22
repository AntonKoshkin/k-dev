export const blobToBase64 = (file: Blob) => {
	return new Promise((result: any, error: any) => {
		let reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => {
			result(reader.result);
		};
		reader.onerror = err => {
			error(err);
		};
	});
};
