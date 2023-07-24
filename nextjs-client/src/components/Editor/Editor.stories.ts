import type { Meta, StoryObj } from '@storybook/react'

import EditorBlock from './EditorBlock'
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Editor/Main',
  component: EditorBlock,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof EditorBlock>

export default meta
type EditorStory = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Header: EditorStory = {
  args: {
    data: {
      blocks: [
        {
          type: 'header',
          data: {
            text: 'Header 1',
            level: 1,
          },
        },
        {
          type: 'header',
          data: {
            text: 'Header 2',
            level: 2,
          },
        },
        {
          type: 'header',
          data: {
            text: 'Header 3',
            level: 3,
          },
        },
        {
          type: 'header',
          data: {
            text: 'Header 4',
            level: 4,
          },
        },
        {
          type: 'header',
          data: {
            text: 'Header 5',
            level: 5,
          },
        },
        {
          type: 'header',
          data: {
            text: 'Header 6',
            level: 6,
          },
        },
      ],
    },
    holder: 'holder',
  },
}

export const Paragraph: EditorStory = {
  args: {
    data: {
      blocks: [
        {
          type: 'paragraph',
          data: {
            text: 'Plain text',
          },
        },
        {
          type: 'paragraph',
          data: {
            text: '<b>Bold text</b>',
          },
        },
        {
          type: 'paragraph',
          data: {
            text: '<i>Italic text</i>',
          },
        },
        {
          type: 'paragraph',
          data: {
            text: '<u>Underline text</u>',
          },
        },
        {
          type: 'paragraph',
          data: {
            text: '<s>Strike text</s>',
          },
        },
        {
          type: 'paragraph',
          data: {
            text: '<code class="inline-code">Inline Code text</code>',
          },
        },
      ],
    },
    holder: 'holder',
  },
}

export const List: EditorStory = {
  args: {
    data: {
      blocks: [
        {
          type: 'list',
          data: {
            style: 'unordered',
            items: [
              {
                content: 'Unordered List 1',
                items: [
                  {
                    content: 'Nested Unordered List Item 1',
                    items: [],
                  },
                  {
                    content: 'Nested Unordered List Item 2',
                    items: [],
                  },
                ],
              },
            ],
          },
        },
        {
          type: 'list',
          data: {
            style: 'ordered',
            items: [
              {
                content: 'Ordered List',
                items: [
                  {
                    content: 'Nested Ordered List Item 1',
                    items: [],
                  },
                  {
                    content: 'Nested Ordered List Item 2',
                    items: [],
                  },
                ],
              },
            ],
          },
        },
      ],
    },
    holder: 'holder',
  },
}

export const Quote: EditorStory = {
  args: {
    data: {
      blocks: [
        {
          type: 'quote',
          data: {
            text: 'Quote',
            caption: 'Quote Caption',
            alignment: 'left',
          },
        },
      ],
    },
    holder: 'holder',
  },
}

export const Image: EditorStory = {
  args: {
    data: {
      blocks: [
        {
          type: 'image',
          data: {
            file: {
              url: 'https://source.unsplash.com/random/800x600',
            },
            caption: 'Image Caption',
          },
        },
      ],
    },
    holder: 'holder',
  },
}

export const Embed: EditorStory = {
  args: {
    data: {
      blocks: [
        {
          type: 'embed',
          data: {
            service: 'youtube',
            source: 'https://www.youtube.com/watch?v=DwuJeGYlYyw',
            embed: 'https://www.youtube.com/embed/DwuJeGYlYyw',
            width: 560,
            height: 315,
            caption: 'Embed Caption',
          },
        },
      ],
    },
    holder: 'holder',
  },
}

export const Table: EditorStory = {
  args: {
    data: {
      blocks: [
        {
          type: 'table',
          data: {
            content: [
              ['1', '2', '3'],
              ['4', '5', '6'],
              ['7', '8', '9'],
            ],
            caption: 'Table Caption',
          },
        },
      ],
    },
    holder: 'holder',
  },
}

export const Link: EditorStory = {
  args: {
    data: {
      blocks: [
        {
          type: 'linkTool',
          data: {
            link: 'https://www.naver.com',
            meta: {
              title: '네이버',
              description: '네이버 메인에서 다양한 정보와 유용한 컨텐츠를 만나 보세요',
              image: {
                url: 'https://s.pstatic.net/static/www/mobile/edit/2016/0705/mobile_212852414260.png',
              },
            },
          },
        },
      ],
    },
    holder: 'holder',
  },
}

export const Code: EditorStory = {
  args: {
    data: {
      blocks: [
        {
          type: 'code',
          data: {
            code: 'function test() {\n  console.log("Hello World");\n}',
            language: 'javascript',
            caption: 'Code Caption',
          },
        },
      ],
    },
    holder: 'holder',
  },
}
