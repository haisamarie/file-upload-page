import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from './styles.module.scss'

const Sidebar_item = [
  { id: 'profile', text: 'profile', link: '/' },
  { id: 'file', text: 'file', link: '/file' },
  { id: 'logout', text: 'logout', link: '/logout' },
]

const checkIsActive = (routerPass: string, linkPass: string): boolean => {
  return routerPass === linkPass
}

export const Sidebar = () => {
  const router = useRouter()
  return (
    <aside className={styles['side-bar']}>
      <nav className={styles['nav-wrap']}>
        <ul>
          {Sidebar_item.map((item) => {
            return (
              <li className={styles['nav-list']} key={item.id}>
                {checkIsActive(router.pathname, item.link) ? (
                  <span className={styles['active-text']}>{item.text}</span>
                ) : (
                  <Link className={styles['nav-link']} href={item.link}>
                    {item.text}
                  </Link>
                )}
              </li>
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}
