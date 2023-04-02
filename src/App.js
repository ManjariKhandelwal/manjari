import React from 'react';
//import Form from './components/Basics/Form';
//import DropDownList from './components/Basics/DropDownList';
//import Temp from './components/WeatherComponents/Temp';
//import { useSelector,useDispatch } from 'react-redux';
//import { incNum,decNum } from './IncrementDecrementRedux/actions';
import Header from './EcommerceApp/containers/Header';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import ProductDetail from './EcommerceApp/containers/ProductDetail';
import ProductListing from './EcommerceApp/containers/ProductListing';

 const App =() => {

  return(
    <div>
    <Router>
    <Header/>
    <Routes>
    <Route path="/" as exact Component={ProductListing}/>
    <Route path="/product/:productId" as exact Component={ProductDetail}/>
    <Route>404 not Found</Route>
    </Routes>
    </Router>
    
    
    </div>
  )

   {/* const myState=useSelector((state)=>state.changeTheNumber);
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
  </div>)*/}
  }
  

    
  
export default App;