import { Logo } from './svgIcons/logo'
import styles from './styles.css'

import { navigation } from 'helpers/constants'

export const Header = () => (
  <header className={styles.header}>
    <a href="/" className={styles.logo}>
      <Logo />
      Садовий рай
    </a>
    <nav>
      <ul className={styles.navList}>
        {
          navigation.map((nav) => <li><a href={`/${nav.text}`}>{nav.text}</a></li>)
        }
      </ul>
    </nav>
  </header>
)
