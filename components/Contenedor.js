import Head from 'next/head'
import styles from '../styles/Home.module.css'

function Contenedor({children}){
  return(
    <div className={styles.container}>
      <Head>
        <title>INSTITUTO MEXICANO DEL CEMENTO Y DEL CONCRETO</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {children}
      </main>

      <footer className={styles.footer}>
        <p>Instituto Mexicano del Cemento y del Concreto A.C.</p>
        <p><small>Av. Insurgentes Sur # 1846 Col. Florida, C.P. 01030, México, CDMX.</small></p>
      </footer>
    </div>
  )
};

export default Contenedor;