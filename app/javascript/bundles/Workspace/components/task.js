import React, { Component } from 'react';

class Task extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="task" key={`task-${this.props.id}`}>
        { this.props.title }
      </div>
    )
  }

export default Task;
