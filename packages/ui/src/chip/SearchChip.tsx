import Chip from './Chip'
import ImsiSVG from './TempIcon'

type SearchChipProps = {
  text: string
}
const SearchChip = ({ text }: SearchChipProps) => {
  return (
    <Chip className='flex items-center gap-[10px] py-[9px] pl-[16px] pr-[12px]' variant='plain'>
      <p className='note-3 text-gray-700'>{text}</p>
      <ImsiSVG />
    </Chip>
  )
}

export default SearchChip
