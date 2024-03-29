import { IconChip } from '@80000coding/ui'
import { icons } from '@80000coding/web-icons'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof IconChip> = {
  title: 'Atoms/Chip/Icon',
  component: IconChip,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    categoryIconNames: {
      options: Object.keys(icons).filter((key) => key.startsWith('category-')),
      control: {
        type: 'select',
      },
    },
    deletable: {
      control: {
        type: 'boolean',
      },
    },
  },
} satisfies Meta<typeof IconChip>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    categoryIconNames: 'TypeScript',
    deletable: false,
  },
}
