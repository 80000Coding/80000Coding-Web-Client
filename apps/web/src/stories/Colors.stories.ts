import type { Meta, StoryObj } from '@storybook/react'

import Colors from './Colors'

const meta = {
  title: 'Design System/Colors',
  component: Colors,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Colors>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}
