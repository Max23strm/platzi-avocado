import React from 'react'
import Link from 'next/link'
import {Avocado, PosMeMuero, Basket} from '../SVGIcons'

import styles from './NavBar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>

      <Link href="/" className={styles.logo}>
        <Avocado/>
        <p>
          Avoshop
        </p>
      </Link>
      <menu>
        {/* <PosMeMuero/> */}
        <Link href="/">
          Home
        </Link>
        <Link href="/about">
          About
        </Link>
      </menu>
    </nav>
  )
}
