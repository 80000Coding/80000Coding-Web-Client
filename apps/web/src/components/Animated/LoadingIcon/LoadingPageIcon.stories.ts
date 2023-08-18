import type { Meta, StoryObj } from '@storybook/react'

import LoadingPageIcon from './LoadingPageIcon'

const meta = {
  title: 'Animated/LoadingPageIcon',
  component: LoadingPageIcon,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
} satisfies Meta<typeof LoadingPageIcon>

export default meta
type Story = StoryObj<typeof meta>

export const Main: Story = {
  args: {
    className: 'w-12 h-12',
  },
}
