import { Route } from '@mui/icons-material'
import { Navigate, Outlet } from 'react-router-dom'
const token = localStorage.getItem("token")
const PrivateRoutes = () => {
  let auth = {'token':token}
return (
    auth.token ? <Outlet/> : <Navigate to='/login'/>
  )
}
export default PrivateRoutes