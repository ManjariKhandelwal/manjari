import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputArea from './InputArea';
import DropDownList from './DropDownList';
class Form extends Component {
    constructor(props) {
        super(props);
        this.state={
            username:"",
            password:""  

    }
  }
      onChange=e=>{
        console.log(e.target.value);
        this.setState({[e.target.name]:e.target.value});
      }
      onSubmit=e=>{
        e.preventDefault();
        console.log("onSubmit event being fired");
        this.setState({username:"",
                        password:""});
      }
      render() {
        const {username,password}=this.state;
        return (
          <div>
            <h1>User Name:{username}</h1>
            <h1>Password:{password}</h1>
            <form onSubmit={this.onSubmit}>
            
              <InputArea type="text" value={username} onChange={this.onChange} name="username"/>
              <InputArea type="text" value={password} onChange={this.onChange} name="password"/>
              <button type="submit">Submit Me</button>
              <DropDownList />
            </form>
          </div>
        );
      }
    }
    

    

export default Form;