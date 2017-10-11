import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduce } from 'lodash';
import BoardSelector from '../components/board-selector';
import { onBoardSelect, fetchBoards, createBoard } from '../actions';

class BoardSelectorContainer extends Component {
  constructor(props) {
    super(props);
    this.onBoardSelect = this.onBoardSelect.bind(this);
    this.onCreateBoard = this.onCreateBoard.bind(this);
  }

  componentWillMount() {
    return this.props.actions.fetchBoards();
  }

  onBoardSelect(id) {
    return this.props.actions.onBoardSelect(id);
  }

  onCreateBoard(name) {
    return this.props.actions.createBoard(name);
  }

  render() {
    return (
      <BoardSelector
        boards={this.props.boards}
        onChange={this.onBoardSelect}
        onCreate={this.onCreateBoard}
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
      onBoardSelect,
      createBoard
    }, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardSelectorContainer);
