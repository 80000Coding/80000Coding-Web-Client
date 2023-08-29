import Chip from './Chip'

type ButtonChipProps = {
  type?: 'cancel' | 'add'
}
const ButtonChip = ({ type = 'add' }: ButtonChipProps) => {
  const text = type === 'cancel' ? '취소' : '댓글 등록'
  const variant = type === 'cancel' ? 'plain' : 'primary'

  return <Chip size='md' text={text} variant={variant} />
}

export default ButtonChip
