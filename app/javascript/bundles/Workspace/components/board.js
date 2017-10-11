import React, { Component } from 'react';

class Board extends Component {
  constructor(props) {
    super(props);
    this.renderColumns = this.renderColumns.bind(this);
  }

  renderColumns() {
    return this.props.columns.map((column) => {
      return(
        <div className="col" key={column.id}>
          <h4>{ column.title }</h4>
        </div>
      )
    });
  }

  render() {
    return (
      <div className="board card">
        <div className="card-header">
          <h3>{this.props.title}</h3>
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
