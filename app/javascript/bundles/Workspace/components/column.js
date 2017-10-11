import React, { Component } from 'react';

class Column extends Component {
  constructor(props) {
    super(props);
    this.renderTasks = this.renderTasks.bind(this);
  }

  render() {
    return (
      <div className="col">
          { this.renderTasks() }
      </div>
    )
  }

  renderTasks() {
    const { tasks } = this.props;
    return tasks.map(this.renderTask);
  }

  renderTask(task) {
    return (
      <div className="task">
        <p>{ task.title }</p>
      </div>
    )
  }

}

export default Column;
