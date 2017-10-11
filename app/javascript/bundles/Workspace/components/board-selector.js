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
      <div className="board-button col" key={`board-${board.id}`}>
        <button
          className="btn btn-primary btn-sm"
          onClick={() => this.onBoardSelect(board)}
        >
        {board.title}
        </button>
      </div>
    );
  }

  renderForm() {
    return (
      <div className="card my-2">
        <div className="card-body">
          <form className="form-inline" role="form">
            <input
              className="form-control"
              type="text"
              placeholder="board name"
              value={this.state.name}
              onChange={this.updateName}
            />
            <button className="btn btn-default" type="button" onClick={this.onCreate}>
              Create
            </button>
          </form>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="boards">
        <h3>Select your active board</h3>

        { this.renderForm() }

        <div className="my-2 row">
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
