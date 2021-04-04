import Head from 'next/head'
import styles from '../styles/Home.module.css'

function Contenedor({children}){
  return(
    <div className={styles.container}>
      <Head>
        <title>INSTITUTO MEXICANO DEL CEMENTO Y DEL CONCRETO</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@200;900&display=swap" rel="stylesheet" />
      </Head>

      <main className={styles.main}>
        {children}
      </main>

      <footer className={styles.footer}>
        <p><b>Instituto Mexicano del Cemento y del Concreto A.C.</b></p>
        <p><small>Av. Insurgentes Sur # 1846 Col. Florida, C.P. 01030, México, CDMX., (55) 5322 5740, imcyc@imcyc.com</small></p>
      </footer>
    </div>
  )
};

export default Contenedor;