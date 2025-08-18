import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UserSignup = () => {
  const [userData, setUserData] = useState({});
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({
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
          className='w-16 mb-9'
          src='https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png'
          alt='Uber Logo'
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
            Already have an account?{' '}
            <Link to='/login' className='text-blue-600'>
              Login here
            </Link>
          </p>
        </form>
      </div>
      <div>
        <Link
          to='/captain-signup'
          className='bg-[#11b461] flex items-center justify-center mb-5 text-white font-semibold rounded px-3 py-2 w-full text-lg'
        >
          Sign up as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserSignup;
