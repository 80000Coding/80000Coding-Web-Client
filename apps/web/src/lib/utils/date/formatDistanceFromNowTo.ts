import { formatDistance as _formatDistance } from 'date-fns'
import { ko } from 'date-fns/locale'

/**
 * 현재 시간을 기준으로 endDate 까지 흐른 시간을 표시합니다.
 * @param endDate
 * @param options
 * @returns
 */
export function formatDistanceFromNowTo(endDate: string) {
  return _formatDistance(new Date(), new Date(endDate), { locale: ko })
}
