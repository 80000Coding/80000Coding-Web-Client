import { StaticCategoryNetworkIcon } from '@80000coding/web-icons'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Design System/StaticIcons',
  component: StaticCategoryNetworkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    width: { control: 'text' },
    height: { control: 'text' },
  },
} satisfies Meta<typeof StaticCategoryNetworkIcon>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    width: '100px',
    height: '100px',
  },
}
