import React from 'react'

const Accessories = ({data}: any) => {
    console.log('JSON.stringify(data, null, 2)', JSON.stringify(data, null, 2))
  return (
    <div><pre>{JSON.stringify(data, null, 2)}</pre></div>
  );
}

export default Accessories;