import React from 'react'
import Navbar from '../components/Nabvar'
import RoleAddCard from '../components/RoleAddCard'

type Props = {}

const RoleAddPage = (props: Props) => {
    return (
        <> <div>
            <Navbar />
        </div>
            <div className='mt-5'>
                <RoleAddCard />
            </div>
     </>

    )
}

export default RoleAddPage