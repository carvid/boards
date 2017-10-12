import React, { Component } from 'react';
import Column from './column';

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
    };

    this.renderColumns = this.renderColumns.bind(this);
    this.updateName = this.updateName.bind(this);
    this.onCreate = this.onCreate.bind(this);
  }

  onCreate() {
    this.props.onAddColumn(this.props.id, this.state.name);
  }

  updateName(ev) {
    this.setState({ name: ev.target.value });
  }

  renderColumns() {
    return this.props.columns.map((column) => {
      return (
        <div className="col" key={column.id}>
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

  render() {
    return (
      <div className="board card">
        <div className="card-header">
          <h3>{this.props.title}</h3>
          {this.renderForm()}
        </div>
        <div className="card-body">
          <div className="row">
            { this.renderColumns() }
          </div>
        </div>
      </div>
    )
  }
}

export default Board;
