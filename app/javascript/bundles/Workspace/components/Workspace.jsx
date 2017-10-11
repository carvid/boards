import React from 'react';

import BoardSelector from '../containers/board-selector.container';
import Board from '../containers/board.container';

export default class Workspace extends React.Component {
  render() {
    return (
      <div className="container">
        <BoardSelector />
        <Board />
      </div>
    );
  }
}