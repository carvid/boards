import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduce } from 'lodash';
import BoardSelector from '../components/board-selector';
import {
  setCurrentBoard,
  fetchBoards,
  createBoard
} from '../actions';

class BoardSelectorContainer extends Component {
  constructor(props) {
    super(props);
    this.onCreateBoard = this.onCreateBoard.bind(this);
    this.setCurrentBoard = this.setCurrentBoard.bind(this);
  }

  componentWillMount() {
    return this.props.actions.fetchBoards();
  }

  setCurrentBoard(board) {
    this.props.actions.setCurrentBoard(board);
    this.props.onBoardSelect(board.id);
  }

  onCreateBoard(name) {
    return this.props.actions.createBoard(name);
  }

  render() {
    return (
      <BoardSelector
        boards={this.props.boards}
        onCreate={this.onCreateBoard}
        onChange={this.setCurrentBoard}
      />
    )
  }
}

const mapStateToProps = (state) => {
  const boards = reduce(state.boards.byId, (result, board) => {
    result.push(board);
    return result;
  }, []);

  return {
    boards,
  }
};

const mapDispatchToProps = (dispatch) => {

  return {
    actions: bindActionCreators({
      fetchBoards,
      createBoard,
      setCurrentBoard,
    }, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardSelectorContainer);
