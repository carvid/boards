import React, { Component } from 'react';

class Column extends Component {
  constructor(props) {
    super(props);

    this.state = { name: '', id: '' };

    this.renderTasks = this.renderTasks.bind(this);
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

  render() {
    return (
      <div className="card">
        <div className="card-header">
          { this.props.title }
        </div>
        <div>
        { this.renderForm() }
        </div>
        <div className="row">
          { this.renderTasks() }
        </div>
      </div>
    )
  }

  renderTasks() {
    const { tasks } = this.props;
    return tasks.map(this.renderTask);
  }

  renderTask(task) {
    return (
      <Task 
        id=task.id
        title=task.title
        position=task.position
      />
    )
  }

  renderForm() {
    return (
      <div className="card my-2">
        <div className="card-body">
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
        </div>
      </div>
    )
  }

}

export default Column;
