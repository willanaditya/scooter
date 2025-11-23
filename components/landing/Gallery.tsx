import React from 'react'

const Gallery = ({data}: any) => {
  return (
    <div><pre>{JSON.stringify(data, null, 2)}</pre></div>
  )
}

export default Gallery