import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DropDownList extends Component {
    constructor(props) {
        super(props);
        this.state={
            value:"Mumbai",
            options:["Delhi","Mumbai","Kolkata","Chennai"]
        };

    }
    onChange=e=>{
        this.setState({value:e.target.value});
    }

    render() {
        const {value,options}=this.state;
        return (
            <form>
                <h1>Current Choice Now:{value}</h1>
                <label htmlFor="options">Pick an Option:</label>
                <select id="options" value={value} onChange={this.onChange}>
                    {options.map((val,index)=>{
                        <option key={index} value={val}></option>
                    })}
                </select>
            </form>
        );
    }
}



export default DropDownList;