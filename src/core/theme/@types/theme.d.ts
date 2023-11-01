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
				'gray-10': string;
				'gray-11': string;
				'gray-15': string;
				'gray-20': string;
				'gray-30': string;
				'gray-35': string;
				'gray-40': string;
				'gray-60': string;
				'gray-70': string;
				'gray-75': string;
			}
		}
	}
}
