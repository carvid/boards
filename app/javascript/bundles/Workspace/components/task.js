import React, { Component } from 'react';

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      editing: false,
    };

    this.updateTitle = this.updateTitle.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.onRemove = this.onRemove.bind(this);
  }

  get editing() { return this.state.editing; }

  updateTitle(ev) {
    this.setState({ title: ev.target.value });
  }

  onEdit() {
    this.setState({ editing: true });
  }

  onUpdate() {
    if (this.state.title.length) {
      this.setState({ editing: false });
      return this.props.onUpdate(this.state.title);
    }
  }

  onRemove(ev) {
    ev.preventDefault();
    ev.stopPropagation();
    return this.props.onRemove(this.props.id);
  }

  renderForm() {
    return (
      <form className="form-inline" role="form">
        <input
          className="form-control"
          type="text"
          value={this.state.title}
          onChange={this.updateTitle}
        />
        <button className="btn btn-default" type="button" onClick={this.onUpdate}>
          Save
        </button>
      </form>
    )
  }

  renderTitle() {
    if (this.editing) return this.renderForm();
    return <span onDoubleClick={this.onEdit}>{this.props.title}</span>;
  }

  render() {
    return (
      <div className="task card col-12 my-2" key={`task-${this.props.id}`}>
        <div className="row justify-content-end">
          <div className="col-1">
            <a href="#" onClick={this.onRemove}>x</a>
          </div>
        </div>
        { this.renderTitle() }
      </div>
    )
  }
}

export default Task;
