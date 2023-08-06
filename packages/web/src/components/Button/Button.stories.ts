import type { Meta, StoryObj } from '@storybook/react'

import Button from './Button'

const meta = {
  title: 'Design System/Button',
  component: Button,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: {
        type: 'radio',
        options: ['lg', 'xl'], // 사용 가능한 타입들을 선택 옵션으로 제공합니다.
      }
    },
    styleVariant: {
      control: {
        type: 'select',
        options: ['primary', 'outline'], // 사용 가능한 타입들을 선택 옵션으로 제공합니다.
      },
    },
    colorVariant: {
      control: {
        type: 'select',
        options: ['green', 'red', 'blue', 'violet'], // 사용 가능한 타입들을 선택 옵션으로 제공합니다.
      }
    }
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Title: Story = {
  args: {
    styleVariant: 'primary',
    colorVariant: 'green',
    disabled: false,
    size: 'xl',
    children: '탈퇴하기',
  },
}
