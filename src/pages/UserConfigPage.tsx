import React from 'react'
import Navbar from '../components/Nabvar'
import UserConfigCard from '../components/UserConfigCard'

type Props = {}

const UserConfigPage = (props: Props) => {
  return (
    <> <div>
            <Navbar />
        </div>
            <div className='mt-5'>
                <UserConfigCard />
            </div>
     </>
  )
}

export default UserConfigPage