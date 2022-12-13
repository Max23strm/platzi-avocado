
import styles from './Details.module.css'
const Details = ({data}:any) => {


  return (
    <div className={styles.container}>
        <section className={styles.mainSection}>
            <h2>{data.name}</h2>
            <img src={data.image} alt={data.name + " image"} />
            <p>SKU: <span>{data.sku}</span></p>
        </section>
        {data.attributes ?
        <section>
            <p>Shape: <span>{data.attributes.shape}</span></p>
            <p>Hardiness: <span>{data.attributes.hardiness}</span></p>
            <p>Taste: <span>{data.attributes.taste}</span></p>
            <p>Description: <span>{data.attributes.description}</span></p>
        </section> : null}
    </div>
  )
}

export default Details