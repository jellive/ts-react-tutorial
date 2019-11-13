import React, { useRef } from 'react';
import Greetings from './Greetings'
import Counter from './Counter'
import MyForm from './MyForm'
import ReducerSample from './ReducerSample'
import { SampleProvider } from './SampleContext';
import './App.css'
import Hello from './Hello'
import Wrapper from './Wrapper'
import Counter_State from './Counter_State'
import InputSample from './InputSample'
import UserList from './UserList'

const App: React.FC = () => {
  const onClick = (name: string) => {
    console.log(name)
  }

  const onSubmit = (form: {name: string, description: string}) => {
    console.log(form)
  }

  const users = [
    {
        id: 1,
        username: 'velopert',
        email: 'public.velopert@gmail.com'
    },
    {
        id: 2,
        username: 'tester',
        email: 'tester@example.com'
    },
    {
        id: 3,
        username: 'liz',
        email: 'liz@example.com'
    }
  ]

  const nextId = useRef(4)
  const onCreate = () => {

    nextId.current += 1
  }

  // const name = 'react'
  // const style = {
  //   backgroundColor: 'black',
  //   color: 'aqua',
  //   fontSize: 24,
  //   padding: '1rem'
  // }
  return (
    <>
      {/* <Greetings name="hihi" onClick={onClick}/>
      <Counter/>
      <MyForm onSubmit={onSubmit}/> */}
      {/* <Counter/> */}
      {/* <SampleProvider>
        <ReducerSample/>
      </SampleProvider> */}

      {/* JS 시작 */}
      {/* <div>안녕하세요</div>
      <div style={style}>{name}</div>
      <div className="gray-box"/>
      <Wrapper>
        <Hello name="react" color="red" isSpecial/>
        <Hello color="pink"/>
      </Wrapper>
      <Counter_State/>
      <InputSample/> */}
      <UserList users={users}/>
    </>
  );
}

export default App;
