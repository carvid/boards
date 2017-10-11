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
      <div className="board">
        <div className="row">
          { this.renderColumns() }
        </div>
      </div>
    )
  }
}

export default Board;
