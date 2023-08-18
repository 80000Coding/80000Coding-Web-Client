'use client'
import type { RemirrorProps, UseThemeProps } from '@remirror/react'
import { EditorComponent, MarkdownToolbar, Remirror, ThemeProvider, useHelpers, useRemirror } from '@remirror/react'
import React, { PropsWithChildren, useCallback } from 'react'
import jsx from 'refractor/lang/jsx.js'
import typescript from 'refractor/lang/typescript.js'
import type { CreateEditorStateProps } from 'remirror'
import { ExtensionPriority } from 'remirror'
import {
  BlockquoteExtension,
  BoldExtension,
  BulletListExtension,
  CodeBlockExtension,
  CodeExtension,
  HardBreakExtension,
  HeadingExtension,
  ImageExtension,
  ItalicExtension,
  LinkExtension,
  ListItemExtension,
  MarkdownExtension,
  OrderedListExtension,
  PlaceholderExtension,
  StrikeExtension,
  TableExtension,
  TrailingNodeExtension,
} from 'remirror/extensions'

import 'remirror/styles/all.css'

import { basicContent } from './RemirrorEditor.const'
import { upload } from './upload'

export interface ReactEditorProps
  extends Pick<CreateEditorStateProps, 'stringHandler'>,
    Pick<RemirrorProps, 'initialContent' | 'editable' | 'autoFocus' | 'hooks'> {
  placeholder?: string
  theme?: UseThemeProps['theme']
}

function Save() {
  const { getMarkdown } = useHelpers()
  const onSave = () => {
    const markdown = getMarkdown()
    if (!markdown) return
    // 모든 이미지 추출
    const imagePaths = markdown.match(/!\[.*?\]\((.*?)\)/g)?.map((match) => match.match(/!\[.*?\]\((.*?)\)/)[1])
    console.log(imagePaths)
    /**
     * 이미지 업로드
     * 이미지 경로 중, data:image/... 형식만 업로드
     * 이미지 경로 중, http://... 형식은 업로드하지 않음
     */
    const newImagePaths = upload(imagePaths)
    // markdown에서 이미지 경로를 업로드된 경로로 변경
    // const newMarkdown = replace();
    // markdown backend로 전송
    // send(newMarkdown)
  }
  return <button onClick={onSave}>Save</button>
}

type Props = PropsWithChildren<Partial<Omit<ReactEditorProps, 'stringHandler'>>>
/**
 * The editor which is used to create the annotation. Supports formatting.
 */
const RemirrorEditor = ({ placeholder = 'start', children, theme, ...rest }: Props) => {
  const extensions = useCallback(
    () => [
      new LinkExtension({ autoLink: true }),
      new PlaceholderExtension({ placeholder }),
      new BoldExtension(),
      new StrikeExtension(),
      new ItalicExtension(),
      new HeadingExtension(),
      new BlockquoteExtension(),
      new BulletListExtension({ enableSpine: true }),
      new ImageExtension(),
      new OrderedListExtension(),
      new ListItemExtension({
        priority: ExtensionPriority.High,
        enableCollapsible: true,
      }),
      new CodeExtension(),
      new CodeBlockExtension({ supportedLanguages: [jsx, typescript] }),
      new TrailingNodeExtension(),
      new TableExtension(),
      new MarkdownExtension({ copyAsMarkdown: false }),
      new HardBreakExtension(),
    ],
    [placeholder],
  )

  const { manager, state } = useRemirror({
    extensions,
    content: basicContent,
    selection: 'start',
    stringHandler: 'markdown',
  })

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Remirror manager={manager} initialContent={state}>
          <MarkdownToolbar />
          <EditorComponent />
          {children}
          <Save />
        </Remirror>
      </ThemeProvider>
    </div>
  )
}

export default RemirrorEditor
