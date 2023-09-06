import { Chip } from '@80000coding/ui'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Atoms/Chip/Primary',
  component: Chip,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
} satisfies Meta<typeof Chip>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    text: '인증',
    size: 'lg',
    variant: 'primary',
    disabled: false,
  },
}

export const PrimaryDisabled: Story = {
  args: {
    text: '인증',
    size: 'lg',
    variant: 'primary',
    disabled: true,
  },
}

export const Outline: Story = {
  args: {
    text: '완료',
    size: 'lg',
    variant: 'outline',
    disabled: false,
  },
}

export const OutlineDisabled: Story = {
  args: {
    text: '대기',
    size: 'lg',
    variant: 'outline',
    disabled: true,
  },
}

export const Plain: Story = {
  args: {
    text: '답글달기',
    size: 'sm',
    variant: 'plain',
  },
}

export const Flat: Story = {
  args: {
    text: '#해시태그',
    size: 'xs',
    variant: 'flat',
  },
}

export const Flat2: Story = {
  args: {
    text: '+3',
    size: 'xs',
    variant: 'flat',
  },
}
