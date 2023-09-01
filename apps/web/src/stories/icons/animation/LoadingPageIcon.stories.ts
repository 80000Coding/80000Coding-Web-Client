import { LoadingPageIcon as LoadingPageIcon$1 } from '@80000coding/ui'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Icons/Animation',
  component: LoadingPageIcon$1,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
} satisfies Meta<typeof LoadingPageIcon$1>

export default meta
type Story = StoryObj<typeof meta>

export const LoadingPageIcon: Story = {
  args: {
    className: 'w-12 h-12',
  },
}
