import React from 'react'
import { useContext } from 'react'
import  AuthContext  from '../context/AuthContext'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRouter = () => {
  const {currentUser,loading}= useContext(AuthContext)
  if (loading) {
    return <span className="loading loading-spinner loading-xs"></span>
  }
  return currentUser ? (
    <div>
         <Outlet />
    </div>
  ): (
     <Navigate to="/login" replace={true} />
  )
}

export default PrivateRouter