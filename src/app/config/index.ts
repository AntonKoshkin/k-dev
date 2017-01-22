declare const production: boolean;

export const CONFIG = {
	url: {
		server: production ?
						'http://k-dev.ru' :
						'http://localhost:3012',
		api: '/api',
	},
};