import { NotificationBox } from '@80000coding/ui'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Atoms/NotificationBox',
  component: NotificationBox,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
} satisfies Meta<typeof NotificationBox>

export default meta
type Story = StoryObj<typeof meta>

export const SingleLine: Story = {
  args: {
    text: '현재 페이지를 닫고 조직이 올바르게 추가되었는지 확인해 주세요.',
  },
}
export const MultiLine: Story = {
  args: {
    text: `42Seoul의 이메일 형식은 @42seoul.ac.kr 또는 @42seoul.ac.kr이에요. 이메일 입력에 문제가 있는 경우 문의하기로 알려주세요.`,
  },
}
