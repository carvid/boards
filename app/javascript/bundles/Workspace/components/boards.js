import React from 'react';
import { Redirect } from 'react-router-dom';
import BoardSelector from '../containers/board-selector.container';
import Board from '../containers/board.container';

export default class Workspace extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      redirectTo: null,
    };

    this.onBoardSelect = this.onBoardSelect.bind(this);
  }

  get shouldRedirect() { return this.state.redirectTo !== null; }

  onBoardSelect(boardId) {
    this.setState({ redirectTo: `/app/board/${boardId}`});
  }

  redirect() {
    return <Redirect to={this.state.redirectTo} />
  }

  render() {
    if (this.shouldRedirect) return this.redirect();

    return (
      <BoardSelector onBoardSelect={this.onBoardSelect} />
    );
  }
}
