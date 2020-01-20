import React from 'react'

type UserType = {
  id: number,
  name: string
}

interface Props {
  user: UserType
}

const User = ({ user }: Props) => {
  return (
    <div>
      <div>
        <b>ID</b>: {user.id}
      </div>
      <div>
        <b>Useername</b>: {user.name}
      </div>

    </div>
  )
}

export default User