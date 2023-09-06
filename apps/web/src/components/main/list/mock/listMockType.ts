export type CategoryType = {
  category_id: number
  category_name: string
}

export type HashTagType = {
  hash_tag_id: number
  hash_tag_name: string
}

export type ContentFeedType = {
  content_id: number // 게시글 id
  content_image_url?: string // 게시글 이미지 url
  title: string // 제목
  body: string // 내용
  category_tag_list: CategoryType[] // 카테고리 태그 리스트
  hash_tag_list: HashTagType[] // 해시태그 리스트
  profile_image_url: string // 프로필 이미지
  user_id: number // 유저 아이디
  user_name: string // 유저 닉네임
  create_dt: string // 업로드 시간
  views: number // 조회수
  comment_count: number // 댓글 수
  mark_count: number // 북마크 수
  like_count: number // 좋아요 수
}
