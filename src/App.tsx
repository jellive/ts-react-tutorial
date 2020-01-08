import React, { useRef, useState, useMemo, useCallback } from 'react';
import './App.css'
import UserList from './UserList'
import CreateUser from './CreateUser'

const countActiveUsers = (users: {
  id: number;
  username: string;
  email: string;
  active: boolean;
}[]) => {
  console.log('활성 사용자 사룰 세는 중...')
  return users.filter(user => user.active).length
}

const App: React.FC = () => {
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  })

  const { username, email } = inputs
  const onChange = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      if (e.target) {
        const { name, value } = e.currentTarget
        setInputs({
          ...inputs,
          [name]: value
        })
      }
    },
    [inputs]
  )

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
  const onCreate = useCallback(
    () => {
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
    },
    [users, username, email]) 


  const onRemove = useCallback((id: number) => {
    setUsers(users.filter(user => user.id !== id))
  }, [users])
  const onToggle = useCallback((id: number) => {
    setUsers(
      users.map(user =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    )
  }, [users])
  const count = useMemo(() => countActiveUsers(users), [users])
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
      <div>활성 사용자 수 : {count}</div>
    </>
  );
}

export default App;
