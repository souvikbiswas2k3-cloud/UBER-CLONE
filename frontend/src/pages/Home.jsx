import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel'
import VehiclePanel from '../components/VehiclePanel'
import ConfirmRide from '../components/ConfirmRide'

const home = () => {
    const [pickup, setPickup] = useState('')
    const [destination, setDestination] = useState('')
    const [panelOpen, setPanelOpen] = useState(false)
    const panel = useRef(null)
    const panelClose = useRef(null)
    const roundedCorner = useRef(null)
    const [vehiclePanel, setVehiclePanel] = useState(false)
    const vehicle = useRef(null)
    const [ConfirmRidePanel, setConfirmRidePanel] = useState(false)
    const Confirm = useRef(null)
    const submitHandler = (e) => {

        e.preventDefault()
    }
    useGSAP(() => {
        if(panelOpen){
            gsap.to(panel.current, {
            height:'80%',
            padding:'25'
            })
            gsap.to(panelClose.current, {
                opacity:1
            })
            gsap.to(roundedCorner.current, {
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0,
            })  
        }
        else{
            gsap.to(panel.current, {
            height:'0%',
            padding:0
            })
            gsap.to(panelClose.current, {
                opacity:0
            })
            gsap.to(roundedCorner.current, {
                borderTopLeftRadius: '15px',
                borderTopRightRadius: '15px',
            })
        }
    },[panelOpen])
    useGSAP(() => {
        if(vehiclePanel){
            gsap.to(vehicle.current, {
            transform:'translateY(0)'
        })
        }
        else{
            gsap.to(vehicle.current, {
            transform:'translateY(100%)'
        })
        }
    },[vehiclePanel])
    useGSAP(() => {
        if(ConfirmRidePanel){
            gsap.to(Confirm.current, {
            transform:'translateY(0)'
        })
        }
        else{
            gsap.to(Confirm.current, {
            transform:'translateY(100%)'
        })
        }
    },[ConfirmRidePanel])
  return (
    <div className='h-screen relative overflow-hidden'>
        <img className='w-16 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />

        <div className='h-screen w-screen'>
                {/* image for temporary use  */}
                <img className='h-full w-full object-cover' src='https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif' alt='' />
        </div>

        <div className='flex flex-col justify-end h-screen absolute top-0 w-full' >
            <div className='bg-white h-[30%] p-5 relative' ref={roundedCorner}>
            <h5 
            onClick={() => {
                setPanelOpen(false)
            }}
            ref={panelClose}
            className='absolute top-6 right-6 text-xl opacity-0'>
                <i className="ri-arrow-down-wide-line"></i>
            </h5>
            <h4 className='text-3xl font-semibold'>
                Find a trip
            </h4> 
            <form onSubmit={(e) => {
                submitHandler(e)
            }}>
                <div className='line absolute h-15 w-1 top-25 left-10 bg-gray-900 rounded-full'></div>
                <input 
                onClick={() => {
                    setPanelOpen(true)
                }}
                value={pickup}
                onChange={(e) => {
                    setPickup(e.target.value)
                }}
                className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5' type='text' placeholder='Add a pick-up location' />
                <input 
                onClick={() => {
                    setPanelOpen(true)
                }}
                value={destination}
                onChange={(e) => {
                    setDestination(e.target.value)
                }}
                className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3' type='text' placeholder='Enter your destination'/>
            </form>
            </div>
            <div ref={panel} className=' bg-white h-0'>
                <LocationSearchPanel setPanelOpen={setPanelOpen} setVehiclePanel={setVehiclePanel} />
            </div>
        </div>
        {/* Choose a Vehicle Block */}
        <div ref={vehicle} className="fixed z-10 bottom-0 w-full translate-y-full px-3 py-10 bg-white pt-12">
            <VehiclePanel setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel}/>
        </div>
        <div ref={Confirm} className="fixed z-10 bottom-0 w-full translate-y-full px-3 py-6 bg-white pt-12">
            <ConfirmRide setConfirmRidePanel={setConfirmRidePanel}/>
        </div>



    </div>
  )
}


export default home