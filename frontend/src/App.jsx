import { Route, Routes } from 'react-router-dom'
import Start from './pages/Start'
import UserLogin from './pages/UserLogin'
import UserSignUp from './pages/UserSignUp'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignUp from './pages/CaptainSignUp'
import { useContext } from 'react'
import { UserDataContext } from './context/UserContext'
import Home from './pages/home'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element = {<Start />} />
        <Route path='/login' element = {<UserLogin />} />
        <Route path='/signup' element = {<UserSignUp />} />
        <Route path='/captain-login' element = {<CaptainLogin />} />
        <Route path='/captain-signup' element = {<CaptainSignUp />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </>
  )
}

export default App