import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CaptainSignup = () => {
  const [captainData, setCaptainData] = useState({});
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    setCaptainData({
      fullName:{
        firstName:firstName,
        lastName:lastName,
      },
      email:email,
      password:password
    });
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img
          className='w-20 mb-9'
          src='https://www.svgrepo.com/show/505031/uber-driver.svg'
          alt='Captain Logo'
        />

        <form onSubmit={submitHandler}>
          <h3 className='text-lg font-semibold mb-2'>What's your name?</h3>
          <div className='flex gap-4 mb-7'>
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className='bg-[#eeeeee] rounded px-3 py-2 border w-1/2 text-lg placeholder:text-base'
              required
              type='text'
              placeholder='First name'
            />
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className='bg-[#eeeeee] rounded px-3 py-2 border w-1/2 text-lg placeholder:text-base'
              required
              type='text'
              placeholder='Last name'
            />
          </div>

          <h3 className='text-lg font-semibold mb-2'>Email Address</h3>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='bg-[#eeeeee] rounded mb-7 px-3 py-2 border w-full text-lg placeholder:text-base'
            required
            type='email'
            placeholder='example@email.com'
          />

          <h3 className='text-lg font-semibold mb-2'>Create Password</h3>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='bg-[#eeeeee] rounded mb-7 px-3 py-2 border w-full text-lg placeholder:text-base'
            required
            type='password'
            placeholder='******'
          />

          <button className='bg-[#111] text-white font-semibold rounded mb-2 px-3 py-2 w-full text-lg'>
            Sign Up
          </button>

          <p className='text-center'>
            Already a captain?{' '}
            <Link to='/captain-login' className='text-blue-600'>
              Login here
            </Link>
          </p>
        </form>
      </div>

      <div>
        <Link
          to='/signup'
          className='bg-[#2222e7f0] flex items-center justify-center mb-5 text-white font-semibold rounded px-3 py-2 w-full text-lg'
        >
          Sign up as User
        </Link>
      </div>
    </div>
  );
};

export default CaptainSignup;
