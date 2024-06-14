import React from 'react'

const UserDetail = ({user}) => {
  return (
    <div className='text-2xl mt-5'>{user.name} is logged in</div>
  )
}

export default UserDetail