import { ContentFeedType } from './listMockType'

export type ContentListType = {
  content: ContentFeedType[]
}

export const listMockData: ContentListType = {
  content: [
    {
      content_id: 1,
      content_image_url: 'https://picsum.photos/200/300',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis nisl rhoncus mattis rhoncus urna neque viverra. Velit sed ullamcorper morbi tincidunt ornare. Nisl tincidunt eget nullam non nisi est sit amet facilisis. Amet justo donec enim diam vulputate ut pharetra sit. Sed velit dignissim sodales ut eu. Quis enim lobortis scelerisque fermentum dui faucibus in. In ante metus dictum at tempor commodo ullamcorper. Porta nibh venenatis cras sed felis. Phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet enim. Enim nulla aliquet porttitor lacus. Purus gravida quis blandit turpis cursus in hac habitasse. Nisl suscipit adipiscing bibendum est ultricies integer quis. Posuere morbi leo urna molestie at. Faucibus purus in massa tempor nec. Consectetur adipiscing elit ut aliquam purus sit amet luctus venenatis. Ultricies leo integer malesuada nunc vel. Massa tincidunt dui ut ornare lectus sit amet est placerat.',
      category_tag_list: [
        {
          category_id: 1,
          category_name: 'networkWired',
        },
        {
          category_id: 2,
          category_name: 'networkWireless',
        },
      ],
      hash_tag_list: [
        {
          hash_tag_id: 1,
          hash_tag_name: 'hash',
        },
        {
          hash_tag_id: 2,
          hash_tag_name: 'tag',
        },
        {
          hash_tag_id: 3,
          hash_tag_name: 'hashTag',
        },
        {
          hash_tag_id: 4,
          hash_tag_name: '해시태그',
        },
      ],
      profile_image_url: 'https://picsum.photos/200/300',
      user_id: 1,
      user_name: 'kunlee',
      create_dt: '2023-08-30T12:02:52.015Z',
      views: 1234,
      comment_count: 12,
      mark_count: 34,
      like_count: 12,
    },
    {
      content_id: 2,
      content_image_url: undefined,
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis nisl rhoncus mattis rhoncus urna neque viverra. Velit sed ullamcorper morbi tincidunt ornare. Nisl tincidunt eget nullam non nisi est sit amet facilisis. Amet justo donec enim diam vulputate ut pharetra sit. Sed velit dignissim sodales ut eu. Quis enim lobortis scelerisque fermentum dui faucibus in. In ante metus dictum at tempor commodo ullamcorper. Porta nibh venenatis cras sed felis. Phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet enim. Enim nulla aliquet porttitor lacus. Purus gravida quis blandit turpis cursus in hac habitasse. Nisl suscipit adipiscing bibendum est ultricies integer quis. Posuere morbi leo urna molestie at. Faucibus purus in massa tempor nec. Consectetur adipiscing elit ut aliquam purus sit amet luctus venenatis. Ultricies leo integer malesuada nunc vel. Massa tincidunt dui ut ornare lectus sit amet est placerat.',
      category_tag_list: [
        {
          category_id: 1,
          category_name: 'networkWired',
        },
        {
          category_id: 2,
          category_name: 'networkWireless',
        },
      ],
      hash_tag_list: [
        {
          hash_tag_id: 1,
          hash_tag_name: 'hash',
        },
        {
          hash_tag_id: 2,
          hash_tag_name: 'tag',
        },
        {
          hash_tag_id: 3,
          hash_tag_name: 'hashTag',
        },
        {
          hash_tag_id: 4,
          hash_tag_name: '해시태그',
        },
      ],
      profile_image_url: 'https://80000coding.s3.ap-northeast-2.amazonaws.com/image.png',
      user_id: 1,
      user_name: 'kunlee',
      create_dt: '2023-07-30T12:02:52.015Z',
      views: 1234,
      comment_count: 1234,
      mark_count: 1234,
      like_count: 1234,
    },
    {
      content_id: 3,
      content_image_url: undefined,
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis nisl rhoncus mattis rhoncus urna neque viverra. Velit sed ullamcorper morbi tincidunt ornare. Nisl tincidunt eget nullam non nisi est sit amet facilisis. Amet justo donec enim diam vulputate ut pharetra sit. Sed velit dignissim sodales ut eu. Quis enim lobortis scelerisque fermentum dui faucibus in. In ante metus dictum at tempor commodo ullamcorper. Porta nibh venenatis cras sed felis. Phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet enim. Enim nulla aliquet porttitor lacus. Purus gravida quis blandit turpis cursus in hac habitasse. Nisl suscipit adipiscing bibendum est ultricies integer quis. Posuere morbi leo urna molestie at. Faucibus purus in massa tempor nec. Consectetur adipiscing elit ut aliquam purus sit amet luctus venenatis. Ultricies leo integer malesuada nunc vel. Massa tincidunt dui ut ornare lectus sit amet est placerat.',
      category_tag_list: [
        {
          category_id: 1,
          category_name: 'networkWired',
        },
        {
          category_id: 2,
          category_name: 'networkWireless',
        },
      ],
      hash_tag_list: [
        {
          hash_tag_id: 1,
          hash_tag_name: 'hash',
        },
        {
          hash_tag_id: 2,
          hash_tag_name: 'tag',
        },
        {
          hash_tag_id: 3,
          hash_tag_name: 'hashTag',
        },
        {
          hash_tag_id: 4,
          hash_tag_name: '해시태그',
        },
      ],
      profile_image_url: 'https://80000coding.s3.ap-northeast-2.amazonaws.com/image.png',
      user_id: 1,
      user_name: 'kunlee',
      create_dt: '2023-07-28T12:02:52.015Z',
      views: 1234,
      comment_count: 1234,
      mark_count: 1234,
      like_count: 1234,
    },
    {
      content_id: 4,
      content_image_url: undefined,
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis nisl rhoncus mattis rhoncus urna neque viverra. Velit sed ullamcorper morbi tincidunt ornare. Nisl tincidunt eget nullam non nisi est sit amet facilisis. Amet justo donec enim diam vulputate ut pharetra sit. Sed velit dignissim sodales ut eu. Quis enim lobortis scelerisque fermentum dui faucibus in. In ante metus dictum at tempor commodo ullamcorper. Porta nibh venenatis cras sed felis. Phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet enim. Enim nulla aliquet porttitor lacus. Purus gravida quis blandit turpis cursus in hac habitasse. Nisl suscipit adipiscing bibendum est ultricies integer quis. Posuere morbi leo urna molestie at. Faucibus purus in massa tempor nec. Consectetur adipiscing elit ut aliquam purus sit amet luctus venenatis. Ultricies leo integer malesuada nunc vel. Massa tincidunt dui ut ornare lectus sit amet est placerat.',
      category_tag_list: [
        {
          category_id: 1,
          category_name: 'networkWired',
        },
        {
          category_id: 2,
          category_name: 'networkWireless',
        },
      ],
      hash_tag_list: [
        {
          hash_tag_id: 1,
          hash_tag_name: 'hash',
        },
        {
          hash_tag_id: 2,
          hash_tag_name: 'tag',
        },
        {
          hash_tag_id: 3,
          hash_tag_name: 'hashTag',
        },
        {
          hash_tag_id: 4,
          hash_tag_name: '해시태그',
        },
      ],
      profile_image_url: 'https://80000coding.s3.ap-northeast-2.amazonaws.com/image.png',
      user_id: 1,
      user_name: 'kunlee',
      create_dt: '2022-06-30T12:02:52.015Z',
      views: 1234,
      comment_count: 1234,
      mark_count: 1234,
      like_count: 1234,
    },
  ],
}
