import Link from 'next/link'
import styles from './styles.module.scss'

export function Header() {
    return (
        <nav className={styles.container}>
            <div className={styles.content}>
                <Link href="/">
                    <a>
                        <img src="/logoPref.svg" alt="logotipo prefeitura" />
                    </a>
                </Link>
                <button>NOVA SOLICITAÇÃO</button>
            </div>
        </nav>
    )
}