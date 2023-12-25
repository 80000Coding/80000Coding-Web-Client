import { Dropdown } from '@80000coding/ui'
import { DynamicDeleteIcon, DynamicEditIcon } from '@80000coding/web-icons'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Atoms/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
} satisfies Meta<typeof Dropdown>

export default meta
type Story = StoryObj<typeof meta>

export const SingleMenu: Story = {
  args: {
    menus: [
      {
        title: '수정하기',
        icon: DynamicEditIcon,
        onClick: () => {
          console.log('수정하기')
        },
      },
    ],
  },
}

export const MultiMenu: Story = {
  args: {
    menus: [
      {
        title: '수정하기',
        icon: DynamicEditIcon,
        onClick: () => {
          console.log('수정하기')
        },
      },
      {
        title: '삭제하기',
        titleColor: 'text-red-warning',
        icon: DynamicDeleteIcon,
        onClick: () => {
          console.log('수정하기')
        },
      },
    ],
  },
}
