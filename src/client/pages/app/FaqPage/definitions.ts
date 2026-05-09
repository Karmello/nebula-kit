export const FAQ: { question: string; answer: string }[] = [
  {
    question: 'Why NebulaKit offers only two themes ?',
    answer:
      'NebulaKit provides only light and dark themes because these backgrounds deliver the most reliable contrast, readability and accessibility across all components. Mid-tone or custom backgrounds can disrupt color balance and intent-based styling, leading to inconsistent visual results. By focusing on absolute light and dark surfaces, NebulaKit ensures predictable visuals and stable accessibility in every project.',
  },
  {
    question: 'Why setting color alone does not work ?',
    answer:
      'In NebulaKit, color selects a palette, but intent defines how that color is applied. Without intent, components remain neutral. This avoids hidden semantic defaults and keeps visual emphasis explicit and predictable.',
  },
]
