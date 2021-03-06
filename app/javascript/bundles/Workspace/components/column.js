import React, { Component } from 'react';
import Task from '../containers/task.container';

class Column extends Component {
  constructor(props) {
    super(props);

    this.state = {
      columnTitle: this.props.title,
      editing: false,
    };

    this.renderTasks = this.renderTasks.bind(this);
    this.renderTask = this.renderTask.bind(this);
    this.updateColumnTitle = this.updateColumnTitle.bind(this);
    this.onCreate = this.onCreate.bind(this);
    this.onUpdateTitle = this.onUpdateTitle.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.stopEditing = this.stopEditing.bind(this);
  }

  get editing() { return this.state.editing; }

  onEdit(ev) {
    ev.preventDefault();
    ev.stopPropagation();
    this.setState({ editing: true });
  }

  onCreate(ev) {
    ev.preventDefault();
    ev.stopPropagation();
    this.props.onCreate('double click to edit', this.props.id)
  }

  onUpdateTitle(ev) {
    if (ev.key === 'Enter') {
      ev.preventDefault();
      ev.stopPropagation();
      if (this.state.columnTitle.length) {
        this.setState({ editing: false });
        this.props.onEdit(this.state.columnTitle)
      }
    }
  }

  stopEditing() {
    this.setState({ editing: false });
  }

  updateColumnTitle(ev) {
    this.setState({ columnTitle: ev.target.value });
  }

  renderTasks() {
    const { tasks } = this.props;
    return tasks.map(this.renderTask);
  }

  renderTask(task) {
    return (
      <Task
        key={`task-${task.id}`}
        columnId={this.props.id}
        {...task}
      />
    );
  }

  renderTitle() {
    if (this.editing) return this.renderTitleForm();
    return (
      <h4 onDoubleClick={this.onEdit}>{ this.props.title }</h4>
    );
  }

  renderTitleForm() {
    return (
      <form role="form">
        <input
          className="form-control form-control-sm"
          type="text"
          value={this.state.columnTitle}
          onChange={this.updateColumnTitle}
          onKeyDown={this.onUpdateTitle}
          onBlur={this.stopEditing}
        />
      </form>
    )
  }

  render() {
    return (
      <div className="board-column card">
        <div className="card-header">
          { this.renderTitle() }
        </div>
        <div className="card-body">
          <div className="row">
            <a onClick={this.onCreate} href="#">...add task</a>
            { this.renderTasks() }
          </div>
        </div>
      </div>
    )
  }
}

export default Column;
