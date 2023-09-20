import { Input as Input$1 } from '@nextui-org/react'

export type InputProps = Omit<React.ComponentProps<typeof Input$1>, 'classNames'>

export function Input() {
  return (
    <Input$1
      type='email'
      label='Email'
      radius='full'
      classNames={{
        label: 'text-black/50 dark:text-white/90',
        input: ['bg-transparent', 'text-black/90 dark:text-white/90', 'placeholder:text-default-700/50 dark:placeholder:text-white/60'],
        innerWrapper: 'bg-transparent',
        inputWrapper: [
          'shadow-xl',
          'bg-default-200/50',
          'dark:bg-default/60',
          'backdrop-blur-xl',
          'backdrop-saturate-200',
          'hover:bg-default-200/70',
          'focus-within:!bg-default-200/50',
          'dark:hover:bg-default/70',
          'dark:focus-within:!bg-default/60',
          '!cursor-text',
        ],
      }}
    />
  )
}
