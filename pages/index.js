import Link from 'next/link'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.title}>
      <h1>HomePage</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed ad animi expedita placeat. Iure iusto quas nihil
        voluptatibus maxime odit debitis aut culpa? Molestias porro suscipit odit at quis nobis?
      </p>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed ad animi expedita placeat. Iure iusto quas nihil
        voluptatibus maxime odit debitis aut culpa? Molestias porro suscipit odit at quis nobis?
      </p>
      <Link href="/ninjas">
        <a className={styles.btn}>See Ninja Listing</a>
      </Link>
    </div>
  )
}
