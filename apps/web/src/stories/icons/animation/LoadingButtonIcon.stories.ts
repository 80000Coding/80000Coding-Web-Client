import { LoadingButtonIcon as LoadingButtonIcon$1 } from '@80000coding/ui'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Icons/Animation',
  component: LoadingButtonIcon$1,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
} satisfies Meta<typeof LoadingButtonIcon$1>

export default meta
type Story = StoryObj<typeof meta>

export const LoadingButtonIcon: Story = {
  args: {
    className: 'w-12 h-12',
    color: 'green',
  },
}
