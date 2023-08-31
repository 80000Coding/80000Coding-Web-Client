import { CommentChip } from '@80000coding/ui'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof CommentChip> = {
  title: 'Design System/Chip(Button)',
  component: CommentChip,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    type: {
      options: ['cancel', 'add'],
      control: {
        type: 'select',
      },
    },
  },
} satisfies Meta<typeof CommentChip>

export default meta
type Story = StoryObj<typeof meta>

export const Add: Story = {
  args: {
    type: 'add',
  },
}

export const Cancel: Story = {
  args: {
    type: 'cancel',
  },
}
