import { useState } from 'react'

import { Pagination } from 'lib/index.pro'
import { type Example } from 'client/definitions'

const Example1 = () => {
  const [page, setPage] = useState<number>(1)
  return <Pagination currentPage={page} totalPages={10} onChange={setPage} />
}

const Example2 = () => {
  const [page, setPage] = useState<number>(1)
  return (
    <Pagination
      variant="solid"
      intent="tertiary"
      currentPage={page}
      totalPages={20}
      onChange={page => {
        setPage(page)
        // manual navigation
      }}
      hrefBuilder={page => `/products?page=${page}`}
      showPrevNext
    />
  )
}

const Example3 = () => {
  const [page, setPage] = useState<number>(1)
  return (
    <Pagination
      variant="outline"
      intent="tertiary"
      currentPage={page}
      totalPages={50}
      onChange={setPage}
      showFirstLast
      showPrevNext
      siblingCount={2}
      boundaryCount={2}
    />
  )
}

export const PAGINATION_EXAMPLES: Example[] = [
  {
    description: 'Basic controlled pagination.',
    jsx: <Example1 />,
    code: `const [page, setPage] = useState<number>(1)

return <Pagination currentPage={page} totalPages={10} onChange={setPage} />`,
  },
  {
    description: 'Pagination with routing.',
    jsx: <Example2 />,
    code: `const [page, setPage] = useState<number>(1)

return (
  <Pagination
    variant="solid"
    intent="tertiary"
    currentPage={page}
    totalPages={20}
    onChange={page => {
      setPage(page)
      // manual navigation
    }}
    hrefBuilder={page => \`/products?page=$\{page}\`}
    showPrevNext
  />
)`,
  },
  {
    description: 'Pagination with extended controls.',
    jsx: <Example3 />,
    code: `const [page, setPage] = useState<number>(1)

return (
  <Pagination
    variant="outline"
    intent="tertiary"
    currentPage={page}
    totalPages={50}
    onChange={setPage}
    showFirstLast
    showPrevNext
    siblingCount={2}
    boundaryCount={2}
  />
)`,
  },
]
