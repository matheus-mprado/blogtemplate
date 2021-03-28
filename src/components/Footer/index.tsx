import styles from './styles.module.scss'

export function Footer(){
    return(
        <footer className={styles.container}>
            <div className={styles.content}>
                <div>
                    <img src="/logoPref.svg" alt="logo prefeitura"/>
                    <img src="/logoPref2.svg" alt="logo prefeitura"/>
                </div>
                <h4>AV. DR. ALTINO ARANTES, 284 - CENTRO</h4>
                <p>SEDE DA FUNDAÇÃO SAÚDE PÚBLICA DE SÃO SEBASTIÃO</p>
            </div>
        </footer>
    )
}