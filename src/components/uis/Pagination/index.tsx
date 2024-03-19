import { ArrowLeftIcon } from '@/components/uis/Icon/ArrowLeftIcon'
import { ArrowLeftLastIcon } from '@/components/uis/Icon/ArrowLeftLastIcon'
import { ArrowRightIcon } from '@/components/uis/Icon/ArrowRightIcon'
import { ArrowRightLastIcon } from '@/components/uis/Icon/ArrowRightLastIcon'

import styles from './styles.module.scss'

interface PaginationProps {
  currentPage: number
  totalPages: number
  basePath: string
  queryParam: string
}

export const Pagination = ({
  currentPage,
  totalPages,
  basePath,
  queryParam,
}: PaginationProps) => {
  return (
    <ul className={styles['paginetion-wrap']}>
      <li className={styles['paginetion-item']}>
        {currentPage > 1 ? (
          <a className={styles['paginetion-link']} href={`${basePath}?${queryParam}=1`}>
            <ArrowLeftLastIcon />
          </a>
        ) : (
          <ArrowLeftLastIcon color='#999' />
        )}
      </li>
      <li className={styles['paginetion-item']}>
        {currentPage > 1 ? (
          <a
            className={styles['paginetion-link']}
            href={`${basePath}?${queryParam}=${currentPage - 1}`}
          >
            <ArrowLeftIcon />
          </a>
        ) : (
          <ArrowLeftIcon color='#999' />
        )}
      </li>
      <p className={styles['text']}>{` ${currentPage} / ${totalPages}`}</p>
      <li className={styles['paginetion-item']}>
        {currentPage < totalPages ? (
          <a
            className={styles['paginetion-link']}
            href={`${basePath}?${queryParam}=${currentPage + 1}`}
          >
            <ArrowRightIcon />
          </a>
        ) : (
          <ArrowRightIcon color='#999' />
        )}
      </li>
      <li className={styles['paginetion-item']}>
        {currentPage < totalPages ? (
          <a
            className={styles['paginetion-link']}
            href={`${basePath}?${queryParam}=${totalPages}`}
          >
            <ArrowRightLastIcon />
          </a>
        ) : (
          <ArrowRightLastIcon color='#999' />
        )}
      </li>
    </ul>
  )
}
