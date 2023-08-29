import { ButtonChip } from '@80000coding/ui'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof ButtonChip> = {
  title: 'Design System/Chip(Button)',
  component: ButtonChip,
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
} satisfies Meta<typeof ButtonChip>

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
