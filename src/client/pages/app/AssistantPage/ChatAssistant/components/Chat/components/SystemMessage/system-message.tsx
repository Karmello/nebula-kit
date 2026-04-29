import { Children, ReactElement, ReactNode } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import { Box } from 'lib/components'
import { CodeSnippet } from 'client/components'
import { CODE_SNIPPET_LANGS } from 'client/components/meta/CodeSnippet/definitions'

import { CHAT_LINE_HEIGHT } from '../../../../definitions'

type SystemMessageProps = {
  content: string
}

export const SystemMessage = ({ content }: SystemMessageProps) => {
  return (
    <Box tagAttrs={{ style: { lineHeight: CHAT_LINE_HEIGHT } }} inlineSize="100%">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          code({ className, children }) {
            return (
              <Box
                tag="code"
                display="inline-block"
                drawable
                variant="solid"
                intent="muted"
                paddingInline="6px"
                paddingBlock="2px"
              >
                {children}
              </Box>
            )
          },

          pre({ children }) {
            const code = Children.only(children) as ReactElement<{
              className?: string
              children?: ReactNode
            }>

            const className = code.props.className
            const lang = className?.replace('language-', '') || 'txt'
            const text = String(code.props.children).replace(/\n$/, '')

            if (CODE_SNIPPET_LANGS.includes(lang as never)) {
              return <CodeSnippet code={text} lang={lang as never} fullBg />
            }

            return <pre>{children}</pre>
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </Box>
  )
}
