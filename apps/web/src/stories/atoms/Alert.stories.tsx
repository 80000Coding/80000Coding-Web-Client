import { Alert } from '@80000coding/ui'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Atoms/Alert',
  component: Alert,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      control: {
        type: 'boolean',
      },
    },
    header: {
      control: {
        type: 'text',
      },
    },
    className: {
      control: {
        type: 'text',
      },
    },
  },
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>

export const SingleAction: Story = {
  args: {
    isOpen: true,
    header: '게시글을 삭제하시겠습니까?',
    body: <>'삭제된 글은 복구할 수 없어요.'</>,
    firstButton: {
      text: '취소',
      action: () => {
        alert('취소')
      },
      variant: 'outline',
    },
    secondButton: {
      text: '삭제',
      action: () => {
        alert('삭제')
      },
      variant: 'primary', // TODO: warning으로 바꾸기
      className: 'bg-red', // TODO:
    },
  },
}
export const MultiAction: Story = {
  args: {
    isOpen: true,
    hideCloseButton: false,
    header: '이어서 작성하시겠습니까?',
    body: <>'임시 저장한 글이 있습니다.'</>,
    firstButton: {
      text: '새로 작성하기',
      action: () => {
        alert('새로 작성하기')
      },
      variant: 'outline',
    },
    secondButton: {
      text: '이어서 작성하기',
      action: () => {
        alert('이어서 작성하기')
      },
      variant: 'primary',
      className: 'bg-green',
    },
  },
}
export const Confirm: Story = {
  args: {
    isOpen: true,
    header: '프로필 사진 용량제한 초과',
    body: '프로필 이미지 용량은 최대 250KB 까지 가능해요.',
    firstButton: {
      text: '확인',
      action: () => {
        alert('확인')
      },
      variant: 'primary',
      className: 'bg-green',
    },
  },
}
