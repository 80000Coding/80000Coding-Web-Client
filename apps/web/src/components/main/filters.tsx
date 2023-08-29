import CategoryFilter from './CategoryFilter'
import OrganizationFilter from './OrganizationFilter'
import SortFilter from './SortFilter'

export default function Filters() {
  return (
    <div className='scrollbar-hide flex items-center gap-x-2 overflow-x-scroll p-3'>
      <CategoryFilter />
      <OrganizationFilter />
      <SortFilter />
    </div>
  )
}
