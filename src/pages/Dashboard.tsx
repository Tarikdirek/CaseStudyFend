import { Route, Routes } from 'react-router-dom'
import LoginPage from './LoginPage'
import AdminPanel from '../components/AdminPanel'
import RoleAddPage from './RoleAddPage'
import UserConfigPage from './UserConfigPage'
import AdminRoute from '../guards/AdminRoute'
import HompageCard from '../components/HompageCard'

type Props = {}

const Dashboard = (props: Props) => {
  return (
    <>
        <Routes>
            <Route path="/" element={<LoginPage/>} />
            <Route path="/adminpanel" element={<AdminRoute><AdminPanel/></AdminRoute>} />
            <Route path='/roleadd' element={<AdminRoute><RoleAddPage/></AdminRoute>} />
            <Route path="/userconfig" element={<AdminRoute><UserConfigPage/></AdminRoute>} />
            <Route path="/homepage" element={<HompageCard/>} />
        </Routes>
       
    </>
  )
}

export default Dashboard