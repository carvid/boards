import React, { Component } from 'react';
import Task from './task';

class Column extends Component {
  constructor(props) {
    super(props);

    this.state = {
      columnTitle: this.props.title,
      taskName: '',
      editing: false,
    };

    this.renderTasks = this.renderTasks.bind(this);
    this.renderTask = this.renderTask.bind(this);
    this.updateTaskName = this.updateTaskName.bind(this);
    this.updateColumnTitle = this.updateColumnTitle.bind(this);
    this.onCreate = this.onCreate.bind(this);
    this.onUpdateTitle = this.onUpdateTitle.bind(this);
    this.onEdit = this.onEdit.bind(this);
  }

  get editing() { return this.state.editing; }

  onEdit(ev) {
    ev.preventDefault();
    ev.stopPropagation();
    this.setState({ editing: true });
  }

  onCreate() {
    if (this.state.taskName.length) {
      this.props.onCreate(this.state.taskName, this.props.id)
      this.setState({ taskName: '' });
    }
  }

  onUpdateTitle() {
    if (this.state.columnTitle.length) {
      this.setState({ editing: false });
    }
  }

  updateColumnTitle(ev) {
    this.setState({ columnTitle: ev.target.value });
  }

  updateTaskName(ev) {
    this.setState({ taskName: ev.target.value });
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
          value={this.state.taskName}
          onChange={this.updateTaskName}
        />
        <button className="btn btn-default" type="button" onClick={this.onCreate}>
          Create
        </button>
      </form>
    )
  }

  renderTitle() {
    if (this.editing) return this.renderTitleForm();
    return (
      <div className="card-header">
        <h4 onDoubleClick={this.onEdit}>{ this.props.title }</h4>
      </div>
    );
  }

  renderTitleForm() {
    return (
      <form className="form-inline" role="form">
        <input
          className="form-control"
          type="text"
          value={this.state.columnTitle}
          onChange={this.updateColumnTitle}
        />
        <button className="btn btn-default" type="button" onClick={this.onUpdateTitle}>
          Save
        </button>
      </form>
    )
  }

  render() {
    return (
      <div className="card">
        {this.renderTitle()}
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
