import { ReactNode } from 'react';
import { DefaultTheme, ThemeProvider as Provider } from 'styled-components';
import { DefaultStyles } from './default-styles';

type Props = {
	children: ReactNode;
}

export const ThemeProvider: React.FC<Props> = ({ children }) => {
	const DEFAULT_THEME: DefaultTheme = {
		'colors': {
			'absolute-colors': {
				'white': '#FFF',
				'black': '#000',
			},

			'green-shades': {
				'green-60': '#CAFF33',
				'green-65': '#D1FF4C',
				'green-70': '#D8FF66',
				'green-80': '#E5FF99',
				'green-90': '#F2FFCC',
				'green-95': '#F8FFE5',
				'green-97': '#FBFFF0',
				'green-99': '#FEFFFA',
			},

			'white-shadees': {
				'white-90': '#E4E4E7',
				'white-95': '#F1F1F3',
				'white-97': '#F7F7F8',
				'white-99': '#FCFCFD',
			},

			'grey-shades': {
				'gray-10': '#191919',
				'gray-11': '#1C1C1C',
				'gray-15': '#262626',
				'gray-20': '#333333',
				'gray-30': '#4C4C4D',
				'gray-35': '#59595A',
				'gray-40': '#656567',
				'gray-60': '#98989A',
				'gray-70': '#B3B3B3',
				'gray-75': '#BFBFBF',
			}
		}
	};

	return (
		<Provider theme={DEFAULT_THEME}>
			<DefaultStyles />
			{children}
		</Provider>
	);
}
