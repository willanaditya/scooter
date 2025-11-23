import React from 'react'

const Testimonials = ({data}: any) => {
  return (
    <div><pre>{JSON.stringify(data, null, 2)}</pre></div>
  )
}

export default Testimonials