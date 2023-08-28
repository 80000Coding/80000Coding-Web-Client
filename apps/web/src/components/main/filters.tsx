import CategoryFilter from './category-filter'
import OrganizationFilter from './organization-filter'
import SortFilter from './sort-filter'

export default function Filters() {
  return (
    <div className='scrollbar-hide flex items-center gap-x-2 overflow-x-scroll p-3'>
      <CategoryFilter />
      <OrganizationFilter />
      <SortFilter />
    </div>
  )
}
