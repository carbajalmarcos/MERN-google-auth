import cntl from 'cntl'
import React from 'react'


const loginContainerCN = cntl`
  container
  flex
  items-center
  justify-center
  w-full
  h-screen
  m-auto
`
const buttonCN = cntl`
  px-8
  py-3
  text-white
  border
  rounded
  bg-sky-800
`

const index = () => {
  const handleLogin = () => {
    console.log('login')
  }
  return (
    <div className={loginContainerCN}>

      <a
        className={buttonCN}
        href={`${process.env.REACT_APP_BACKEND_URL_BASE}/auth/google`}
      >
        Google SignIn
      </a>

    </div>
  )
}

export default index