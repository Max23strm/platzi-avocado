import React, { useEffect, useState } from 'react'
import Layout from '@components/Layout'
import CardContainer from '@components/CardContainer/CardContainer'

const HomePage = () => {
  const [avoList, setAvoList] = useState<TProduct[]> ([])

  useEffect(()=>{
    window.fetch('api/avo').then(response => response.json()).then(json=> setAvoList(json.data))
  },[])
  return (
    <>
    

      <Layout>
        <CardContainer data={avoList}/>
      </Layout>
    </>
  )
}

export default HomePage
