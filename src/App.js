import React, { Component } from 'react';
//import Form from './components/Basics/Form';
//import DropDownList from './components/Basics/DropDownList';
//import Temp from './components/WeatherComponents/Temp';
import { useSelector,useDispatch } from 'react-redux';
import { incNum,decNum } from './IncrementDecrementRedux/actions';

 const App =() => {

    const myState=useSelector((state)=>state.changeTheNumber);
    const dispatch=useDispatch();
  return(
    <div>
      <h2>Increment Decrement Counter</h2>
      <div>
      <div>
        <input type='text' value={myState}></input>
      </div>
        <button onClick={()=>{dispatch(incNum())}}>+</button>
        <button onClick={()=>{dispatch(decNum())}}>-</button>
      </div>
    </div>)
  }
  

    
  
export default App;