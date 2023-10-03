import type { Meta, StoryObj } from '@storybook/react'

import { default as Profile$1 } from '../../app/profile/[id]/page'

const meta = {
  title: 'Pages/Profile',
  component: Profile$1,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
} satisfies Meta<typeof Profile$1>

export default meta
type Story = StoryObj<typeof meta>

export const Profile: Story = {
  args: {},
}
