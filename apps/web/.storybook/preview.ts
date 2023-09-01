import type { Preview } from '@storybook/react'

import '@80000coding/ui/dist/index.css'
import '../src/app/globals.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        method: 'alphabetical',
        order: ['Icons', 'Foundations', 'Atoms', ['*', ['Docs', 'Primary']], 'Molecules', 'Organisms', '*', 'Hooks'],
        includeNames: true,
      },
    },
  },
}

export default preview
