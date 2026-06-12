import { Children, ReactElement, ReactNode } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import { Box, Button, Divider } from 'lib/components'
import { CodeSnippet } from 'client/components'
import { CODE_SNIPPET_LANGS } from 'client/components/meta/CodeSnippet/definitions'

type AssistantMessageProps = {
  content: string
  handleQuestionClick: (question: string) => void
}

export const AssistantMessage = ({ content, handleQuestionClick }: AssistantMessageProps) => {
  return (
    <Box inlineSize="100%">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        urlTransform={url => url}
        components={{
          code({ children }) {
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
              return <CodeSnippet code={text} lang={lang as never} />
            }

            return <pre>{children}</pre>
          },
          a({ href, children }) {
            if (href?.startsWith('app://ask/')) {
              const question = decodeURIComponent(href.replace('app://ask/', ''))

              return (
                <Button scale="xs" variant="outline" color="blue" intent="tertiary" onClick={() => handleQuestionClick(question)}>
                  {children}
                </Button>
              )
            }

            return <a href={href}>{children}</a>
          },
          hr() {
            return <Divider intent="muted" marginTop="48px" />
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </Box>
  )
}
