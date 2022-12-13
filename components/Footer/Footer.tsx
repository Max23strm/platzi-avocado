import Link from 'next/link'

import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer>
      <div className={styles.footer}>
        <div>
          <h5>Sobre mí</h5>
          <a href="https://maximilianoportafolio.netlify.app/" target={"_blank"}>Portfolio</a>
        </div>
        <div>
          <h5>Contacto</h5>
          <a href="https://www.linkedin.com/in/m-ovejak/">LinkedIn</a>
          <a  href="mailto:maximiliano.ovejak@gmail.com">Email</a>
        </div>
        <div>
          <h5>Menu</h5>
          <Link href={"/"}>Home</Link>
          <Link href={"/about"}>About</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer