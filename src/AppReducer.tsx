import React, {  useCallback, useReducer, useMemo } from 'react';
import './App.css'
import UserList from './UserList'
import CreateUser from './CreateUser'
import useInputs from './hooks/useInputs'

const countActiveUsers = (users: {
  id: number;
  username: string;
  email: string;
  active: boolean;
}[]) => {
  console.log('활성 사용자 사룰 세는 중...')
  return users.filter(user => user.active).length
}

const initialState = {
  inputs: {
    username: '',
    email: ''
  },
  users: [
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
  ]
};

function reducer(state: {
  inputs: {
    username: string,
    email: string
  },
  users: {
    id: number,
    username: string,
    email: string,
    active: boolean
  }[]
}, action: any) {
  switch (action.type) {
    case 'CREATE_USER':
      return {
        inputs: initialState.inputs,
        users: state.users.concat(action.user)
      }
    case 'TOGGLE_USER':
      return {
        ...state,
        users: state.users.map(user =>
          user.id === action.id ? { ...user, active: !user.active } : user)
      }
    case 'REMOVE_USER':
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.id)
      }
    default:
      return state;
  }
}

let context: any = null
export const UserDispatch = React.createContext(context)

const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { users } = state;

  // const onCreate = useCallback(
  //   () => {
  //     dispatch({
  //       type: 'CREATE_USER',
  //       user: {
  //         id: nextId.current,
  //         username,
  //         email
  //       }
  //     })
  //     nextId.current += 1
  //   },
  //   [username, email]
  // )

  const count = useMemo(() => countActiveUsers(users), [users])
  return (
    <UserDispatch.Provider value={dispatch}>
      <CreateUser />
      <UserList users={users} />
      <div>활성사용자 수 : {count}</div>
    </UserDispatch.Provider>
  );
}

export default App;
