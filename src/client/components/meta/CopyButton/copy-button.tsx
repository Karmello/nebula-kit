import { useRef, useState } from 'react'

import { IconButton } from 'lib/components'

type CopyButtonProps = {
  text: string
}

export const CopyButton = ({ text }: CopyButtonProps) => {
  const [copied, setCopied] = useState<boolean>(false)

  const timeoutRef = useRef<NodeJS.Timeout>(null)

  const handleCopy = async () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    await navigator.clipboard.writeText(text)
    setCopied(true)
    timeoutRef.current = setTimeout(() => setCopied(false), 800)
  }

  return (
    <IconButton
      tagAttrs={{ 'aria-label': copied ? 'Copied' : 'Copy code' }}
      iconName={copied ? 'check' : 'copy'}
      scale="xs"
      variant="ghost"
      intent="primary"
      color="blue"
      onClick={handleCopy}
    />
  )
}
