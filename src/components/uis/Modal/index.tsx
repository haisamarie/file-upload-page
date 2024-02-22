import { ReactNode } from 'react'
import ReactModal from 'react-modal'

import styles from './styles.module.scss'

type ModalProps = {
  isOpen: boolean
  onRequestClose: () => void
  style?: string
  title: string
  children: ReactNode
}

const modalStyle = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  content: {
    maxWidth: '800px',
    margin: '0 auto',
    borderRadius: '8px',
    border: 'none',
    padding: '60px',
  },
}

export const Modal = ({ isOpen, onRequestClose, title, children }: ModalProps) => {
  return (
    <ReactModal isOpen={isOpen} onRequestClose={onRequestClose} style={modalStyle}>
      <h2 className={styles['title']}>{title}</h2>
      {children}
    </ReactModal>
  )
}
