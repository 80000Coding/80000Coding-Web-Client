import { SearchChip } from '@80000coding/ui'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof SearchChip> = {
  title: 'Design System/Chip(Search)',
  component: SearchChip,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    text: {
      control: {
        type: 'text',
      },
    },
  },
} satisfies Meta<typeof SearchChip>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    text: '최근검색결과',
  },
}
