import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from './Typography'

const meta = {
  title: 'Foundations/Typography',
  component: Typography,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const Classes: Story = {
  args: { type: 'classes' },
}

export const FontFamily: Story = {
  args: { type: 'font-family' },
}
