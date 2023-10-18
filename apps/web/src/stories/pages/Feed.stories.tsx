import type { Meta, StoryObj } from '@storybook/react'

import { default as Feed$1 } from '../../app/page'

const meta = {
  title: 'Pages/Feed',
  component: Feed$1,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
} satisfies Meta<typeof Feed$1>

export default meta
type Story = StoryObj<typeof meta>

export const Feed: Story = {
  args: {},
}
