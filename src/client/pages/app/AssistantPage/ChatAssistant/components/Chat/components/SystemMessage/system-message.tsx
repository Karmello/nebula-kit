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
          code(props) {
            const { className, children } = props
            const lang = className?.replace('language-', '')
            if (CODE_SNIPPET_LANGS.includes(lang as never)) {
              return <CodeSnippet code={String(children).replace(/\n$/, '')} lang="tsx" fullBg />
            }
            return <code className={className}>{children}</code>
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </Box>
  )
}
