import { LoadingPageIcon } from '@80000coding/ui'
import type { Meta, StoryObj } from '@storybook/react'

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
