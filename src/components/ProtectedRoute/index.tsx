import { useReactiveVar } from '@apollo/client'
import { isLoggedinVar } from 'apollo'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {
  const isLoggedIn = useReactiveVar(isLoggedinVar)
  if (!isLoggedIn) return <Navigate to='/login' />
  return <Outlet />
}

export default ProtectedRoute
