import Code from '@editorjs/code'
import type { BlockTool, SanitizerConfig } from '@editorjs/editorjs'
import cn from 'classnames'
import { createRoot } from 'react-dom/client'

import PrismWrapper from './PrismWrapper'

interface SyntaxCodeBlockToolData {
  text: string
}

type ValidatedSyntaxCodeBlockToolData = SyntaxCodeBlockToolData

type SyntaxCodeBlockToolDispatchData = (action: { text?: string }) => void

class SyntaxCode extends Code implements BlockTool {
  sanitize?: SanitizerConfig | undefined

  drawView() {
    const holder = document.createElement('div')

    createRoot(holder).render(<PrismWrapper className={cn(this.CSS.textarea, this.CSS.input)} code={this.data.code} />)

    return holder
  }

  save(block: HTMLElement) {
    return {
      code: block.querySelector('textarea')?.value,
    }
  }

  render(): HTMLElement {
    return this.nodes.holder
  }
}

export { SyntaxCode }
export type { SyntaxCodeBlockToolData, SyntaxCodeBlockToolDispatchData, ValidatedSyntaxCodeBlockToolData }
