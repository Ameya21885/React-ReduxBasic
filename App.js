// import logo from './logo.svg';
import React,{useState} from 'react';
import {useDispatch, useSelector } from 'react-redux';
import './App.css';
import {increment, decrement, incrementByAmount} from "./app/counterSlice";
import oneImg from './img/one.avif';


function App() {
  
// const [counter, setCounter]= useState(0);

const counter= useSelector(state => state.counter.value);
const dispatch = useDispatch()

const incrementCounter=()=>{
  // setCounter((prevCounter)=> prevCounter+1)
  dispatch(increment());
}
const decrementCounter=()=>{
  // setCounter((prevCounter)=> prevCounter-1)
  dispatch(decrement());
}


  return (
    <> 
    
    <div className="App">

<img 
src='https://images.unsplash.com/photo-1658573524324-0cb489d708fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80' 
alt=''/>

<div className='a'> 
     <h1>React Redux</h1>
     <h2>Counter - {counter}</h2>
     <button onClick={incrementCounter}>Increment</button>
     <button onClick={decrementCounter}>Decrement</button>
     <button onClick={()=> dispatch(incrementByAmount(50))}>Increment by Amount50 </button>
     </div>

    </div>
    </>
  );
}

export default App;
