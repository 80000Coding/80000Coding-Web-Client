import type { Meta, StoryObj } from '@storybook/react'

import ThemeDropdownContainer from './ThemeDropdown'

const meta = {
  title: 'Atoms/Dropdown',
  component: ThemeDropdownContainer,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
} satisfies Meta<typeof ThemeDropdownContainer>

export default meta
type Story = StoryObj<typeof meta>

export const ThemeDropdown: Story = {
  args: {},
}
