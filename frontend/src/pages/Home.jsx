import React, { useState } from 'react'

const home = () => {
    const [pickup, setPickup] = useState('')
    const [destination, setDestination] = useState('')
    const submitHandler = (e) => {

        e.preventDefault()
    }
  return (
    <div className='h-screen relative'>
        <img className='w-16 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />

        <div className='h-screen w-screen'>
                {/* image for temporary use  */}
                <img className='h-full w-full object-cover' src='https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif' alt='' />
        </div>

        <div className='flex flex-col justify-end h-screen absolute top-0 w-full' >
            <div className='bg-white h-[30%] p-5 relative'>
            <h4 className='text-3xl font-semibold'>
                Find a trip
            </h4> 
            <form onSubmit={(e) => {
                submitHandler(e)
            }}>
                <div className='line absolute h-15 w-1 top-25 left-10 bg-gray-900 rounded-full'></div>
                <input 
                value={pickup}
                onChange={(e) => {
                    setPickup(e.target.value)
                }}
                className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5' type='text' placeholder='Add a pick-up location' />
                <input 
                value={destination}
                onChange={(e) => {
                    setDestination(e.target.value)
                }}
                className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3' type='text' placeholder='Enter your destination'/>
            </form>
            </div>
            <div className='bg-emerald-500 h-0'></div>
        </div>

    </div>
  )
}

export default home