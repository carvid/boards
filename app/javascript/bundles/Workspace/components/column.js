import React, { Component } from 'react';
import Task from './task';

class Column extends Component {
  constructor(props) {
    super(props);

    this.state = { name: '', id: '' };

    this.renderTasks = this.renderTasks.bind(this);
    this.renderTask = this.renderTask.bind(this);
    this.updateName = this.updateName.bind(this);
    this.onCreate = this.onCreate.bind(this);
  }

  onCreate() {
    if (this.state.name.length) {
      this.props.onCreate(this.state.name, this.state.id)
      this.setState({ name: '', id: this.props.id });
    }
  }

  updateName(ev) {
    this.setState({ name: ev.target.value, id: this.props.id });
  }

  renderTasks() {
    const { tasks } = this.props;
    return tasks.map(this.renderTask);
  }

  renderTask(task) {
    return (
      <Task
        key={`task-${task.id}`}
        id={task.id}
        title={task.title}
        position={task.position}
      />
    );
  }

  renderForm() {
    return (
      <form className="form-inline" role="form">
        <input
          className="form-control"
          type="text"
          placeholder="task name"
          value={this.state.name}
          onChange={this.updateName}
        />
        <button className="btn btn-default" type="button" onClick={this.onCreate}>
          Create
        </button>
      </form>
    )
  }

  render() {
    return (
      <div className="card">
        <div className="card-header">
          <h4>{ this.props.title }</h4>
        </div>
        <div className="card-body">
          { this.renderForm() }
          <div className="my-3 row">
            { this.renderTasks() }
          </div>
        </div>
      </div>
    )
  }
}

export default Column;
