import React, { Component } from 'react';
import Column from '../containers/column.container';

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      boardTitle: this.props.title,
      name: '',
      editing: false,
    };

    this.renderColumns = this.renderColumns.bind(this);
    this.updateName = this.updateName.bind(this);
    this.updateBoardTitle = this.updateBoardTitle.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
    this.onCreate = this.onCreate.bind(this);
    this.onEdit = this.onEdit.bind(this);
  }

  get editing() { return this.state.editing; }

  onCreate() {
    this.props.onAddColumn(this.props.id, this.state.name);
  }

  onEdit() {
    this.setState({ editing: true });
  }

  onUpdate() {
    if (this.state.boardTitle.length) {
      this.setState({ editing: false });
      this.props.onEdit(this.props.id, this.state.boardTitle);
    }
  }

  updateName(ev) {
    this.setState({ name: ev.target.value });
  }

  updateBoardTitle(ev) {
    this.setState({ boardTitle: ev.target.value });
  }

  renderColumns() {
    return this.props.columns.map((column) => {
      return (
        <div className="col-2 board-col" key={column.id}>
          <Column {...column} />
        </div>
      )
    });
  }

  renderForm() {
    return (
      <form className="form-inline" role="form">
        <input
          className="form-control"
          type="text"
          placeholder="column name"
          value={this.state.name}
          onChange={this.updateName}
        />
        <button className="btn btn-default" type="button" onClick={this.onCreate}>
          Add Column
        </button>
      </form>
    );
  }

  renderTitle() {
    if (this.editing) return this.renderTitleForm();
    return (
      <h3 onDoubleClick={this.onEdit}>{this.props.title}</h3>
    );
  }

  renderTitleForm() {
    return (
      <form className="form-inline" role="form">
        <input
          className="form-control"
          type="text"
          value={this.state.boardTitle}
          onChange={this.updateBoardTitle}
        />
        <button className="btn btn-default" type="button" onClick={this.onUpdate}>
          Save
        </button>
      </form>
    )
  }

  render() {
    return (
      <div className="board card">
        <div className="card-header">
          { this.renderTitle() }
        </div>
        <div className="card-body boards">
          { this.renderForm() }
          <div className="row">
            { this.renderColumns() }
          </div>
        </div>
      </div>
    )
  }
}

export default Board;
