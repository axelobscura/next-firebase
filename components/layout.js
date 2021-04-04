import Head from 'next/head'
import styles from '../styles/Home.module.css'

function Layout({children}){
  return(
    <div className={styles.container}>
      <Head>
        <title>FIREBASE APP TEST</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {children}
      </main>

      <footer className={styles.footer}>
        test
      </footer>
    </div>
  )
};

export default Layout;