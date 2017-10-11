import React, { Component } from 'react';

class BoardSelector extends Component {
  constructor(props) {
    super(props);
    this.renderBoard = this.renderBoard.bind(this);
  }

  onBoardSelect(board) {
    return this.props.onChange(board.id);
  }

  renderBoards() {
    const { boards } = this.props;
    return boards.map(this.renderBoard);
  }

  renderBoard(board) {
    return (
      <div className="board-button col-1" key={`board-${board.id}`}>
        <button
          className="btn btn-primary btn-sm"
          onClick={() => this.onBoardSelect(board)}
        >
        {board.title}
        </button>
      </div>
    );
  }

  render() {
    return (
      <div className="boards">
        <h3>Select your active board</h3>
        <div className="row">
          { this.renderBoards() }
        </div>
      </div>
    )
  }
};

BoardSelector.defaultProps = {
  boards: [],
}

export default BoardSelector;
