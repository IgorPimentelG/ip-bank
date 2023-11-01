import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		'colors': {
			'absolute-colors': {
				'white': string;
				'black': string;
			},

			'green-shades': {
				'green-60': string;
				'green-65': string;
				'green-70': string;
				'green-80': string;
				'green-90': string;
				'green-95': string;
				'green-97': string;
				'green-99': string;
			},

			'white-shadees': {
				'white-90': string;
				'white-95': string;
				'white-97': string;
				'white-99': string;
			},

			'grey-shades': {
				'grey-10': string;
				'grey-11': string;
				'grey-15': string;
				'grey-20': string;
				'grey-30': string;
				'grey-35': string;
				'grey-40': string;
				'grey-60': string;
				'grey-70': string;
				'grey-75': string;
			}
		}
	}
}
