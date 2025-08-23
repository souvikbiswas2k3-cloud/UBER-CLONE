import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
        <h5 onClick={() => {props.setVehiclePanel(false)}} className='p-1 text-center w-[95%] absolute top-0'><i className='text-3xl text-gray-200 ri-arrow-down-wide-line'></i></h5>
        <h3 className="text-2xl font-semibold mb-5">Choose a Vehicle</h3>

        {/* UberGo */}
        <div onClick={() => {props.setConfirmRidePanel(true)}} className="flex border-2 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between">
            <img
            className="h-10"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1743773253/assets/5e/8ce23d-35fa-425d-a7d2-08a2826d04bc/original/UberBlackXL.png"
            alt="UberGo"
            />
            <div className="flex-1 px-4">
            <h4 className="font-medium">
                UberGo <span className="inline-flex items-center"><i className="ri-user-3-fill ml-1 mr-1"></i>4</span>
            </h4>
            <h5 className="text-sm">2 mins away</h5>
            <p className="text-xs">Affordable, compact rides</p>
            </div>
            <h2 className="text-2xl font-semibold">₹182.20</h2>
        </div>

        {/* UberAuto */}
        <div onClick={() => {props.setConfirmRidePanel(true)}} className="flex border-2 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between">
            <img
            className="h-10"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
            alt="UberAuto"
            />
            <div className="flex-1 px-4">
            <h4 className="font-medium">
                UberAuto <span className="inline-flex items-center"><i className="ri-user-3-fill ml-1 mr-1"></i>3</span>
            </h4>
            <h5 className="text-sm">3 mins away</h5>
            <p className="text-xs">Affordable Auto rides</p>
            </div>
            <h2 className="text-2xl font-semibold">₹123.40</h2>
        </div>

        {/* Moto */}
        <div onClick={() => {props.setConfirmRidePanel(true)}} className="flex border-2 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between">
            <img
            className="h-10"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_638,w_956/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
            alt="Moto"
            />
            <div className="flex-1 px-4">
            <h4 className="font-medium">
                Moto <span className="inline-flex items-center"><i className="ri-user-3-fill ml-1 mr-1"></i>1</span>
            </h4>
            <h5 className="text-sm">3 mins away</h5>
            <p className="text-xs">Affordable motorcycle rides</p>
            </div>
            <h2 className="text-2xl font-semibold">₹99.90</h2>
        </div>
    </div>
  )
}

export default VehiclePanel