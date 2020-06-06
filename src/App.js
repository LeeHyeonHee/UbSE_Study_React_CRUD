import React, { useState } from 'react';
import logo from './logo.svg';
import {UserList, Input} from './component'
import './App.css';

function App() {
const [user, setuser] = useState([
  {
    id: 1,
    userName: "TestUser1",
    userEmail: "testEmail"    
  }
])

const _handlerInsert = people => {
  setuser([...user,{
    id: user.length + 1,
    userName: people.userName,
    userEmail: people.userEmail
  }])
};

const _handlerDelete = key => {
  setuser(
    user.filter(element => {
      return element.id !== key
    })
  )
}

const _handlerUpdate = peopleInfo => {
  
  
    // const  a = user.map(element => {
    //      if(element.id === peopleInfo.id){
    //       return peopleInfo
    //     }else{
    //       return element
    //     } 
    //   })

    //    setuser(a)
  setuser(
    user.map(element=>(
      element.id === peopleInfo.id ? peopleInfo : element
    ))
  )
  console.log(peopleInfo);
}

  return (
    <div className="App">
      <Input handlerInsert={_handlerInsert}/>
      <UserList user={user} handlerDelete={_handlerDelete} handlerUpdate={_handlerUpdate}/>
    </div>
  );
}

export default App;
