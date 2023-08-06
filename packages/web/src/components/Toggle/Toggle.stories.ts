import type { Meta, StoryObj } from '@storybook/react'

import Toggle from './Toggle'

const meta = {
  title: 'Design System/Toggle',
  component: Toggle,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    isChecked: {
      control: {
        type: 'boolean',
      },
    },
  },
} satisfies Meta<typeof Toggle>

export default meta
type Story = StoryObj<typeof meta>

export const OnOff: Story = {
  args: {
    isChecked: true,
  },
}
