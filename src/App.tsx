import React, { useRef, useState } from 'react';
import './App.css'
import UserList from './UserList'
import CreateUser from './CreateUser'

const App: React.FC = () => {
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  })

  const { username, email } = inputs
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    if (e.target) {
      const { name, value } = e.currentTarget
      console.log(name, value)
      setInputs({
        ...inputs,
        [name]: value
      })
    }
  }

  const [users, setUsers] = useState([
    {
        id: 1,
        username: 'velopert',
        email: 'public.velopert@gmail.com',
        active: true
    },
    {
        id: 2,
        username: 'tester',
        email: 'tester@example.com',
        active: false
    },
    {
        id: 3,
        username: 'liz',
        email: 'liz@example.com',
        active: false
    }
  ])

  const nextId = useRef(4)
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
      active: false
    }

    setUsers(users.concat(user))

    setInputs({
      username: '',
      'email': ''
    })
    nextId.current += 1
  }

  const onRemove = (id: number) => {
    setUsers(users.filter(user => user.id !== id))
  }
  const onToggle = (id: number) => {
    setUsers(
      users.map(user => 
        user.id === id ? { ...user, active: !user.active } : user
      )
    )
  }
  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users}
        onRemove={onRemove}
        onToggle={onToggle}
        />
    </>
  );
}

export default App;
