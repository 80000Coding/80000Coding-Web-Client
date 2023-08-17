import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

import Toggle from './Toggle'

const meta = {
  title: 'Design System/Toggle',
  component: Toggle,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Toggle>

export default meta

type Story = StoryObj<typeof meta>

const ToggleWithHooks = () => {
  const [isChecked, setIsChecked] = useState(false)

  const handleClick = () => {
    setIsChecked((prevChecked) => !prevChecked)
  }

  return <Toggle isChecked={isChecked} onToggleClick={handleClick} />
}

export const WithHooks: Story = {
  name: 'With Hooks',
  render: () => <ToggleWithHooks />,
}

export const WithoutHooks: Story = {
  name: 'Without Hooks',
  args: {
    isChecked: undefined,
    onToggleClick: undefined,
  },
}
