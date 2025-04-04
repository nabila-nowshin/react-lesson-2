import Counter from './counter'
import './App.css'
import Player from './player'
import Users from './users'
import { Suspense, useState } from 'react'
import Friends from './friends'

const fetchUsers=fetch('https://jsonplaceholder.typicode.com/users')
.then(res=>res.json())

const fetchFriends=async()=>{
  const res2=await fetch('https://jsonplaceholder.typicode.com/users')
  return res2.json()
}


function App() {
 const friendPromise=fetchFriends();

 let [count,setCount]=useState(0)
 let [text,setText]=useState('Hello,React')
const addOne=()=>{
  count+=1;
  setCount(count);
}

const subOne=()=>{
  count-=1;
  setCount(count);
}

const reset=()=>{
  count=0;
  setCount(count);
}

const change=()=>{
  if(text.length !=0){
    let newText='';
    setText(newText);
  }
  else{
    setText('Hello, React');
  }
 
}

  return (
    <>
      {/* useState */}
      <Counter></Counter>
      <Player></Player>

      {/* API -1st way
        1. write fetcch with json conversion,send it as props
        2. wrap the data loading under suspense
        3.use*/}
      <h1 className=''>API</h1>
      <Suspense fallback={<h3>Loading....</h3>}>
         <Users fetchUsers={fetchUsers}></Users>
      </Suspense> 

      {/* using async await,has to call the func */}
      <Suspense fallback={<h2>Friends are waiting....</h2>}>
        <Friends fetchFriends={friendPromise}></Friends>
      </Suspense>



      {/* oweworks */}
      <div>
       <h2>Count :{count}</h2> 
       <button onClick={addOne}>+1</button>
       <button onClick={subOne}>-1</button>
       <button onClick={reset}>Reset</button>
      </div>

      <div>
       <h2>{text}</h2> 
       <button onClick={change}>Toggle</button>
      </div>
    </>
  )
}

export default App
