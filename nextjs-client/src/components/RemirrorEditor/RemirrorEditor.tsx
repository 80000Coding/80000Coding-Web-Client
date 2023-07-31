import type { RemirrorProps, UseThemeProps } from '@remirror/react'
import { EditorComponent, MarkdownToolbar, Remirror, ThemeProvider, useRemirror } from '@remirror/react'
// import { AllStyledComponent } from '@remirror/styles/emotion'
import React, { FC, PropsWithChildren, useCallback } from 'react'
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

import { basicContent } from './RemirrorEditor.const'

export interface ReactEditorProps
  extends Pick<CreateEditorStateProps, 'stringHandler'>,
    Pick<RemirrorProps, 'initialContent' | 'editable' | 'autoFocus' | 'hooks'> {
  placeholder?: string
  theme?: UseThemeProps['theme']
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
      /**
       * `HardBreakExtension` allows us to create a newline inside paragraphs.
       * e.g. in a list item
       */
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
        </Remirror>
      </ThemeProvider>
    </div>
  )
}

export default RemirrorEditor
