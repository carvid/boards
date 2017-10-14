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

  get canAddMoreColumns() { return this.props.columns.length < 5 }

  onCreate() {
    this.props.onAddColumn(this.props.id, this.state.name);
    this.setState({ name: '' });
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
      <div className="col-2">
        <div className="new-column rounded text-center">
          <h5 className="title">Add column</h5>
          <form role="form" className="p-2">
            <input
              className="form-control form-control-sm"
              type="text"
              placeholder="Column name"
              value={this.state.name}
              onChange={this.updateName}
              disabled={!this.canAddMoreColumns}
            />
            <button
              className="btn btn-sm btn-default"
              type="button"
              onClick={this.onCreate}
              disabled={!this.canAddMoreColumns}
            >
              Add Column
            </button>
          </form>
        </div>
      </div>
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
      <form role="form">
        <div className="input-group">
          <input
            className="form-control form-control-large"
            type="text"
            value={this.state.boardTitle}
            onChange={this.updateBoardTitle}
          />
          <button className="input-group-addon" type="button" onClick={this.onUpdate}>
            Save
          </button>
        </div>
      </form>
    )
  }

  render() {
    return (
      <div className="board">
        <div className="row">
          <div className="col-12">
            { this.renderTitle() }
          </div>
        </div>
        <div className="boards py-3">
          <div className="row row-eq-height my-3">
            { this.renderColumns() }
            { this.renderForm() }
          </div>
        </div>
      </div>
    )
  }
}

export default Board;
