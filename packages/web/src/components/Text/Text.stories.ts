import type { Meta, StoryObj } from '@storybook/react'

import Text from './Text'

const meta = {
  title: 'Design System/Text',
  component: Text,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['title-1', 'title-2', 'title-3', 'body-1', 'body-2', 'body-3', 'note-1', 'caption-1'], // 사용 가능한 타입들을 선택 옵션으로 제공합니다.
      },
    },
  },
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

export const Title: Story = {
  args: {
    type: 'title-1',
    children: 'Hello World',
  },
}
