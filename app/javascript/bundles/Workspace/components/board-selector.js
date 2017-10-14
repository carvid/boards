import React, { Component } from 'react';

class BoardSelector extends Component {
  constructor(props) {
    super(props);

    this.state = { name: '' };

    this.renderBoard = this.renderBoard.bind(this);
    this.updateName = this.updateName.bind(this);
    this.onCreate = this.onCreate.bind(this);
  }

  onBoardSelect(board) {
    return this.props.onChange(board);
  }

  onCreate() {
    if (this.state.name.length) {
      this.props.onCreate(this.state.name)
      this.setState({ name: '' });
    }
  }

  updateName(ev) {
    this.setState({ name: ev.target.value });
  }

  renderBoards() {
    const { boards } = this.props;
    return boards.map(this.renderBoard);
  }

  renderBoard(board) {
    return (
      <div className="board-item col-3 my-2" key={`board-${board.id}`}>
        <div className="board-button rounded btn-primary"
          onClick={() => this.onBoardSelect(board)}
        >
          <span className="title">{board.title}</span>
        </div>
      </div>
    );
  }

  renderForm() {
    return (
      <div className="board-item col-3 my-2">
        <div className="new-board rounded text-center">
          <span className="title">Create new board</span>
          <form className="form-inline" role="form">
            <input
              className="form-control form-control-sm"
              type="text"
              placeholder="Board name"
              value={this.state.name}
              onChange={this.updateName}
            />
            <br/>
            <button className="btn btn-sm" type="button" onClick={this.onCreate}>
              Create
            </button>
          </form>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="board-selector">
        <h3>Select your active board</h3>

        <div className="my-2 row">
          { this.renderBoards() }

          { this.renderForm() }
        </div>
      </div>
    )
  }
};

BoardSelector.defaultProps = {
  boards: [],
}

export default BoardSelector;
