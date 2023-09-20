import type { Preview } from '@storybook/react'

import '@80000coding/ui/dist/index.css'
import '../src/app/globals.css'

const preview: Preview = {
  globalTypes: {
    darkMode: {
      defaultValue: true, // Enable dark mode by default on all stories
    },
  },
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      story: {
        inline: false,
      },
      iframeHeight: 600,
    },
    options: {
      storySort: {
        method: 'alphabetical',
        order: [
          'Icons',
          'Foundations',
          ['*', ['Docs', 'Primary']],
          'Atoms',
          ['*', ['Docs', 'Primary']],
          'Molecules',
          'Organisms',
          '*',
          'Hooks',
        ],
        includeNames: true,
      },
    },
  },
}

export default preview
