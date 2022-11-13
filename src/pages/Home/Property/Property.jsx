import React from "react"

import "./property.css"
import SingleProperty from "./SingleProperty"

const Property = () => {
  return (
    <>
      <section className='property padding'>
        <div className='container'>
          <SingleProperty />
        </div>
      </section>
    </>
  )
}

export default Property
