import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'

import { Pagination } from '@/components/uis/Pagination'
import { BasicTable } from '@/components/uis/Table/BasicTable'

import styles from './styles.module.scss'

type BasicTableProps = {
  columns: TableColumn[]
  data: TableData[]
  rowsPerPage?: number
  basePath: string
  text?: JSX.Element
}

type TableColumn = {
  label: string
  value: string
  width?: string
  isCenter?: boolean
  isCheckbox?: boolean
}
type TableData = {
  [key: string]: string
}
export const BasicTableWithPagination = ({
  columns,
  data,
  basePath,
  rowsPerPage = 4,
}: BasicTableProps) => {
  const router = useRouter()
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(data.length / rowsPerPage)

  useEffect(() => {
    const page = parseInt(router.query.page as string, 10)
    setCurrentPage(page || 1)
  }, [router.query.page])

  const currentDataIndexStart = (currentPage - 1) * rowsPerPage
  const currentDataIndexEnd = currentDataIndexStart + rowsPerPage
  const currentData = data.slice(currentDataIndexStart, currentDataIndexEnd)

  return (
    <>
      <BasicTable columns={columns} data={currentData} />
      <div className={styles['pagination-wrap']}>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          basePath={basePath}
          queryParam='page'
        />
      </div>
    </>
  )
}
