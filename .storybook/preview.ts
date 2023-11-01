import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import type { Preview } from '@storybook/react';
import { ThemeProvider } from '../src/core/theme/theme-provider';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },
	decorators: [withThemeFromJSXProvider({
		Provider: ThemeProvider,
	})],
};
export default preview;
