import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
      <>
        <Head>
            <title> Daolist | Home</title>
            <meta name="keywords" content="dao list" />
        </Head>
        <div>
          <h1 className={styles.title}> Homepage </h1>
            <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet at aut beatae, debitis delectus deserunt dignissimos doloribus enim eum facilis fugit illum ipsum magnam magni minima minus molestias nam odit pariatur perspiciatis porro quae quas quasi quibusdam quod ratione rem saepe suscipit temporibus totam velit vero voluptatem. Maiores, nisi.</p>
            <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet at aut beatae, debitis delectus deserunt dignissimos doloribus enim eum facilis fugit illum ipsum magnam magni minima minus molestias nam odit pariatur perspiciatis porro quae quas quasi quibusdam quod ratione rem saepe suscipit temporibus totam velit vero voluptatem. Maiores, nisi.</p>
          <Link href="/ninjas">
          <a className={styles.btn}>See Ninja listing</a>
          </Link>
        </div>
      </>
  )
}
