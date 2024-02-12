import { Button } from '@80000coding/ui'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: ['full', 'half', 'alert-full', 'alert-half', 'alert-small'],
      control: {
        type: 'radio',
      },
    },
    variant: {
      options: ['primary', 'secondary', 'warning', 'custom'],
      control: {
        type: 'select',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    className: {
      control: {
        type: 'text',
      },
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Title: Story = {
  args: {
    variant: 'primary',
    disabled: false,
    size: 'full',
    text: '타이틀',
  },
}
