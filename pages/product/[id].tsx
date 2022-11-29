import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

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
      console.log(avo)
  return (
    <section>
      {avo.name && <h1>Página producto: {avo.name}</h1>}
    </section>
  )
}

export default ProductPage
