import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import DetailsContainer from '@components/DetailsContainer/DetailsContainer'
import Layout from '@components/Layout'

const ProductPage = () => {
  const [avo, setAvo] = useState({})
  const {
    query: { id },
  } = useRouter()

  useEffect(() => {
    if (id) {
      window
        .fetch(`/api/avo/${id}`)
        .then((res) => res.json())
        .then((data) => setAvo(data))
      }},[])
  return (
    <Layout>
      <section>
        <DetailsContainer data={avo}/>
      </section>
    </Layout>
  )
}

export default ProductPage
