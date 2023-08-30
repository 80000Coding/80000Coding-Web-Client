import { Button } from '@80000coding/ui'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Design System/Button',
  component: Button,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: ['S', 'M', 'L'], // 사용 가능한 타입들을 선택 옵션으로 제공합니다.
      control: {
        type: 'radio',
      },
    },
    variant: {
      options: ['primary', 'outline'], // 사용 가능한 타입들을 선택 옵션으로 제공합니다.
      control: {
        type: 'select',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    warning: {
      control: {
        type: 'boolean',
      },
    },
    className: {
      control: {
        type: 'text',
      },
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Title: Story = {
  args: {
    variant: 'primary',
    disabled: false,
    warning: false,
    size: 'M',
    text: '타이틀',
    children: '탈퇴하기',
    className: 'bg-green',
  },
}
