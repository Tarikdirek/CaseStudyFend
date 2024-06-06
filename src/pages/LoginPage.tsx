import React from 'react'
import LoginCard from '../components/LoginCard'

type Props = {}

const LoginPage = (props: Props) => {
  return (
    <>
         <div className="d-flex justify-content-center align-items-center vh-100">
                <LoginCard />
        </div>
    </>
  )
}

export default LoginPage