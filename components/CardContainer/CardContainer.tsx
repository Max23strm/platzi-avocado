import Card from '@components/Card/Card'
import styles from './CardContainer.module.css'

const CardContainer = ({data}) => {
  return (
    <div className={styles.container}>
        {data.map(e=>{
        return <Card key={e.name} data={e}/>
      })}
    </div>
  )
}

export default CardContainer