import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CaptainLogin = () => {
  
    const [captainData, setCaptainData] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const submitHandler = (e) => {
      e.preventDefault();
      setCaptainData({
        email:email,
        password:password
      });
      setPassword("");
      setEmail("");
    }

    return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img className='w-20 mb-9' src='https://www.svgrepo.com/show/505031/uber-driver.svg'/>
      <form onSubmit={(e) => {
        submitHandler(e);
        
      }}>
        <h3 className='text-lg font-semibold mb-2'>What's your email</h3>
        <input value={email} onChange={(e) => {
          setEmail(e.target.value)
        }} className='bg-[#eeeeee] rounded mb-7 px-3 py-2 border w-full text-lg placeholder:text-base' required type="email" placeholder='example@email.com'/>
        <h3 className='text-lg font-semibold mb-2'>Enter Password</h3>
        <input value={password} onChange={(e) => {
          setPassword(e.target.value) 
        }} className='bg-[#eeeeee] rounded mb-7 px-3 py-2 border w-full text-lg placeholder:text-base' required type='password' placeholder='******'/>
        <button className='bg-[#111] text-white font-semibold rounded mb-2 px-3 py-2 w-full text-lg placeholder:text-base'>Login</button>

        <p className='text-center'>Join a fleet? <Link to={'/captain-signup'} className='text-blue-600'>Register as a Captain</Link></p>

      </form>
      </div>
      <div>
        <Link
        to={'/login'}
         className='bg-[#2222e7f0] flex items-center justify-center mb-5 text-white font-semibold rounded px-3 py-2 w-full text-lg placeholder:text-base'>
          Sign in as User 
        </Link>
      </div>
    </div>
  )
}

export default CaptainLogin