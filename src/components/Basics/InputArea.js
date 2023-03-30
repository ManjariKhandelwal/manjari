import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputArea extends Component {
    constructor(props) {
        super(props);

    }
    
    

    render() {
        const {label,type,name,value,onChange}=this.props;
        return (
            <div>
                <input type={type}
                     value={value}
                    onChange={onChange}
                    name={name}
              />
            </div>
        );
    }
}



export default InputArea;