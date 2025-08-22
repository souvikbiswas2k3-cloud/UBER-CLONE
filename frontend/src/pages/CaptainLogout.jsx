import React, { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CaptainLogout = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token')

        if (!token) {
            navigate('/captain-login')
            return
        }

        axios.get(`${import.meta.env.VITE_API_URL}/captains/logout`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(() => {
            localStorage.removeItem('token')
            navigate('/captain-login')
        })
        .catch(() => {
            localStorage.removeItem('token')
            navigate('/captain-login')
        })
    }, [navigate])

    return <div>Logging out...</div>
}

export default CaptainLogout
