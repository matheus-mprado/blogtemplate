import styles from './styles.module.scss'

export function Header() {
    return (
        <nav className={styles.container}>
            <div className={styles.content}>
                <img src="/logoPref.svg" alt="logotipo prefeitura" />
                <button>NOVA SOLICITAÇÃO</button>
            </div>
        </nav>
    )
}