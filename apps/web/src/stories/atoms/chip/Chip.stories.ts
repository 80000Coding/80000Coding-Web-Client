import { Chip } from '@80000coding/ui'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Atoms/Chip/Primary',
  component: Chip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: ['sm', 'md'],
      control: {
        type: 'radio',
      },
    },
  },
} satisfies Meta<typeof Chip>

export default meta
type Story = StoryObj<typeof meta>

export const Flat: Story = {
  args: {
    text: '#해시태그',
  },
}

export const Flat2: Story = {
  args: {
    text: '+3',
  },
}
