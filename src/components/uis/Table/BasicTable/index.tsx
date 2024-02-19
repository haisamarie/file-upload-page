import styles from './styles.module.scss'

type TableColumn = {
  label: string
  value: string
}
type TableData = {
  [key: string]: string
}
type BasicTableProps = {
  columns: TableColumn[]
  data: TableData[]
}

export const BasicTable = ({ columns, data }: BasicTableProps) => {
  return (
    <table className={styles['table']}>
      <thead>
        <tr className={styles['tr']}>
          {columns.map((column) => (
            <th className={styles['th']} key={column.label}>
              {column.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr className={styles['tr']} key={row.id || rowIndex}>
            {columns.map((column) => {
              const cellData = row[column.value]
              return (
                <td
                  className={styles['td']}
                  key={`${row.id || rowIndex}-${column.label}`}
                >
                  {cellData}
                </td>
              )
            })}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
