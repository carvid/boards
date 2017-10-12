import React, { Component } from 'react';

class Task extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="task card col-12 my-2" key={`task-${this.props.id}`}>
        { this.props.title }
      </div>
    )
  }
}

export default Task;
