import Link from "next/link"

import styles from './Card.module.css'

const Card = ({data}:any) => {
  return (
    <Link href={`/product/${data.id}`} className={styles.container}>
        <h3>{data.name}</h3>
        <img src={data.image} alt={data.name} />
        <p>price: {data.price}</p>
    </Link>
  )
}

export default Card