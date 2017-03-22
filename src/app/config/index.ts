declare const production: boolean;

export const CONFIG = {
	url: {
		server: production ?
						'http://koshkin.xyz' :
						'http://localhost:3012',
		api: '/api',
	},
};
