import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full shadow-red-50 bg-white'>
      <div className=' max-w-[1140px] h-[74px] p-6  mx-auto flex justify-between items-center'>
        <div>
          <img
            src="/logo.svg"
          />
        </div>
        <div className='hidden md:flex gap-8 text-[#42454A] font-ubuntu'>
          <div>PRODUCTS</div>
          <div>GALLERY</div>
          <div>CONTACT</div>
        </div>
        <div className='hidden md:flex gap-4 text-[#42454A] font-ubuntu '>
          <button className='w-[106px] h-12 hover:bg-black hover:text-white hover:rounded-sm cursor-pointer'>
            LOGIN
          </button>
          <button className='text-white bg-black w-[106px] h-12 border rounded-sm cursor-pointer'>
            SIGNUP
          </button>
        </div>
        <div className='md:hidden'>☰</div>

      </div>
    </div>

  )
}

export default Navbar
