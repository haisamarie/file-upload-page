import ReactModal from 'react-modal'

import { Button } from '@/components/uis/Button'

//import style from './styles.module.scss'

type ModalProps = {
  isOpen: boolean
  onRequestClose: () => void
  style?: string
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
    padding: '40px',
  },
}

export const Modal = ({ isOpen, onRequestClose }: ModalProps) => {
  return (
    <ReactModal isOpen={isOpen} onRequestClose={onRequestClose} style={modalStyle}>
      <h2>profileを編集する</h2>
      <form action=''>
        <label>
          氏名
          <input type='text' name='name' />
        </label>
        <label>
          メールアドレス
          <input type='email' name='name' />
        </label>
        <label>
          事業部
          <input type='text' name='name' />
        </label>
        <Button onClick={onRequestClose}>Chancel</Button>
        <Button onClick={onRequestClose}>Submit</Button>
      </form>
    </ReactModal>
  )
}
