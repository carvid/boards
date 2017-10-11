import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduce } from 'lodash';
import BoardSelector from '../components/board-selector';
import { setCurrentBoard, fetchBoards } from '../actions';

class BoardSelectorContainer extends Component {
  constructor(props) {
    super(props);
    this.setCurrentBoard = this.setCurrentBoard.bind(this);
  }

  componentWillMount() {
    return this.props.actions.fetchBoards();
  }

  setCurrentBoard(board) {
    return this.props.actions.setCurrentBoard(board);
  }

  render() {
    return (
      <BoardSelector
        boards={this.props.boards}
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
      setCurrentBoard,
    }, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardSelectorContainer);
