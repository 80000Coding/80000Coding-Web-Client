import cn from 'classnames'
import React from 'react'

type TextType = 'title-1' | 'title-2' | 'title-3' | 'body-1' | 'body-2' | 'body-3' | 'note-1' | 'caption-1' | 'button-1' | 'button-2' | 'button-3'// 여기에 사용할 타입들을 정의합니다.

type Props = {
  type: TextType
} & React.HTMLAttributes<HTMLDivElement>

const Text = ({ type, className, children, ...rest }: Props) => {
  // 타입에 따라서 Tailwind CSS 클래스를 매핑합니다.
  const typeToClass = {
    'title-1': 'text-xl font-bold black',
    'title-2': 'text-lg font-medium text-gray-500',
    'title-3': 'text-sm font-bold text-gray-700',
    'body-1': 'text-lg font-bold text-gray-700',
    'body-2': 'text-lg font-regular text-gray-500',
    'body-3': 'text-sm font-regular text-gray-700',
    'note-1': 'text-base font-regular text-gray-700',
    'caption-1': 'text-xs font-regular text-gray-300',
    'button-1': 'text-xl font-semibold',
    'button-2': 'text-default font-semibold ',
    'button-3': 'text-lg font-semibold ',
  }

  return (
    <div className={cn(typeToClass[type], className)} {...rest}>
      {children}
    </div>
  )
}

export default Text
