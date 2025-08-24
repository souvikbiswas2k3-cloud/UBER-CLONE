import React from 'react'

const LookingForDriver = () => {
  return (
    <div>
      <h5 onClick={() => {props.setConfirmRidePanel(false)}} className='p-1 text-center w-[95%] absolute top-0'><i className='text-3xl text-gray-200 ri-arrow-down-wide-line'></i></h5>
      <h3 className="text-2xl font-semibold mb-5">LookingForDriver</h3>
      <div className='flex gap-2 justify-between items-center flex-col'>
        <img className='h-20' src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1743773253/assets/5e/8ce23d-35fa-425d-a7d2-08a2826d04bc/original/UberBlackXL.png' />
        <div className='w-full mt-5'>
          <div className='flex items-center gap-5 p-2 border-b-2 border-gray-300'>
            <i className='text-lg ri-map-pin-user-fill'></i>
            <div>
              <h3 className='text-lg font-medium'>562/11-A</h3>
              <p className='text-sm -mt-1 text-gray-600'>Kankariya Talab, Bhopal</p>
            </div>
          </div>
          <div className='flex items-center gap-5 p-2 border-b-2 border-gray-300'>
            <i className='text-lg ri-map-pin-2-fill'></i>
            <div>
              <h3 className='text-lg font-medium'>562/11-A</h3>
              <p className='text-sm -mt-1 text-gray-600'>Kankariya Talab, Bhopal</p>
            </div>
          </div>
          <div className='flex items-center gap-5 p-2'>
            <i className='ri-currency-line'></i>
            <div>
              <h3 className='text-lg font-medium'>182.20</h3>
              <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LookingForDriver