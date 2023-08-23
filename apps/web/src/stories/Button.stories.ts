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
      control: {
        type: 'radio',
        options: ['S', 'M', 'L'], // 사용 가능한 타입들을 선택 옵션으로 제공합니다.
      },
    },
    variant: {
      control: {
        type: 'select',
        options: ['primary', 'outline'], // 사용 가능한 타입들을 선택 옵션으로 제공합니다.
      },
    },
    color: {
      control: {
        type: 'select',
        options: [
          'green',
          'red',
          'blue',
          'violet',
          'lightGreen',
          'lightRed',
          'lightBlue',
          'lightViolet',
          'darkGreen',
          'darkRed',
          'darkBlue',
          'darkViolet',
        ], // 사용 가능한 타입들을 선택 옵션으로 제공합니다.
      },
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Title: Story = {
  args: {
    variant: 'primary',
    color: 'violet',
    disabled: false,
    size: 'M',
    text: '타이틀~',
    children: '탈퇴하기',
  },
}
