import Chip from './Chip'

type CommentChipProps = {
  type?: 'cancel' | 'add'
}
const CommentChip = ({ type = 'add' }: CommentChipProps) => {
  const text = type === 'cancel' ? '취소' : '댓글 등록'
  const variant = type === 'cancel' ? 'plain' : 'primary'

  return <Chip size='md' text={text} variant={variant} />
}

export default CommentChip
