import React from 'react'

type UserType = {
  id: number,
  name: string
}

interface Props {
  user: UserType
}

const User = ({user}: Props) => {
  return (
    <div>
      <div>
        <b>ID</b>: {user.id}
      </div>
      <div>
        <b>Useername</b>: {user.name}
      </div>
      <button onClick={methodDoesNotExist}>Break the world</button>
    </div>
  )
}

export default User