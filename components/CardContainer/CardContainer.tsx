import Card from '@components/Card/Card'
import styles from './CardContainer.module.css'

const CardContainer = ({data}:any) => {
  return (
    <div className={styles.container}>
        {data.map((e:any)=>{
        return <Card key={e.name} data={e}/>
      })}
    </div>
  )
}

export default CardContainer