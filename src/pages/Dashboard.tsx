import { Route, Routes } from 'react-router-dom'
import LoginPage from './LoginPage'
import AdminPanel from '../components/AdminPanel'
import RoleAddPage from './RoleAddPage'
import UserConfigPage from './UserConfigPage'

type Props = {}

const Dashboard = (props: Props) => {
  return (
    <>
        <Routes>
            <Route path="/" element={<LoginPage/>} />
            <Route path="/adminpanel" element={<AdminPanel/>} />
            <Route path='/roleadd' element={<RoleAddPage/>} />
            <Route path="/userconfig" element={<UserConfigPage/>} />
        </Routes>
       
    </>
  )
}

export default Dashboard