import React from 'react'

const Hero = ({ data }: any) => {
  return (
    //<pre>{JSON.stringify(data, null, 2)}</pre>
    <div className='w-full'>
      <div className='flex max-w-[1390px] m-5 justify-center space-x-2'>
        <div className='flex flex-col mt-4 w-[586px] h-[548px]'>
          <span className='font-ubuntu text-[80px] font-light tracking-normal'>LET's RIDE</span>
          <span className='font-ubuntu text-[80px] font-bold tracking-normal'>THE FUTURE.</span>
          <div className= "w-[335px] h-1 bg-[#42454A]"/>
          
        </div>
        <div>
          <h1>LET's RIDE</h1>
          <h1>THE FUTURE</h1>
        </div>
      </div>
    </div>
  )
}

export default Hero