import React from 'react';
import Greetings from './Greetings'
import Counter from './Counter'
import MyForm from './MyForm'
import ReducerSample from './ReducerSample'

const App: React.FC = () => {
  const onClick = (name: string) => {
    console.log(name)
  }

  const onSubmit = (form: {name: string, description: string}) => {
    console.log(form)
  }
  return (
    <>
    {/* <Greetings name="hihi" onClick={onClick}/>
    <Counter/>
    <MyForm onSubmit={onSubmit}/> */}
    {/* <Counter/> */}
    <ReducerSample/>
    </>
  );
}

export default App;
