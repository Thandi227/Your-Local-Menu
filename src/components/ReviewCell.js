import React, { Component } from 'react';

export default class Call extends Component {
    constructor(props) {
        super(props);
        
  }

      
  render() {
    return (
      <div style={{backgroundColor:"yellow"}}>
          <div>
              <button>Edit</button>
              <button>Delete</button>
          </div>
        <div>
            <img />
            <span>{this.props.user}</span>
            <span>{this.props.rating}</span>
        </div>
        <p>Comment:{this.props.comment}</p>
      </div>
      
    )
  }
}