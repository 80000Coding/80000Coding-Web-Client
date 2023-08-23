import type { Meta, StoryObj } from '@storybook/react'

import DynamicIcons from './DynamicIcons'

const meta = {
  title: 'Design System/DynamicIcons',
  component: DynamicIcons,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: {
        type: 'radio',
        options: ['sm', 'md', 'lg'],
      },
    },
    color: {
      control: {
        type: 'select',
        options: ['green', 'darkgreen', 'blue', 'violet', 'red', 'black'],
      },
    },
  },
} satisfies Meta<typeof DynamicIcons>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}
