import { DetailedHTMLProps, HTMLAttributes } from 'react'

export type DashedBorderProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const PlaygroundArea = (props: DashedBorderProps) => {
  return (
    <div
      {...props}
      style={{
        position: 'relative',
        border: 'var(--border-width) dashed var(--blue-4)',
        ...props.style,
      }}
    >
      {props.children}
    </div>
  )
}
