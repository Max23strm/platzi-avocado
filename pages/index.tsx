import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Navbar from '@components/Navbar/Navbar'
import CardContainer from '@components/CardContainer/CardContainer'
import Card from '@components/Card/Card'

const HomePage = () => {
  const [avoList, setAvoList] = useState<TProduct[]> ([])

  useEffect(()=>{
    window.fetch('api/avo').then(response => response.json()).then(json=> setAvoList(json.data))
  },[])
  return (
    <>
      <Navbar />
      <CardContainer data={avoList}/>
    </>
  )
}

export default HomePage
