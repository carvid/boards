import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduce } from 'lodash';
import BoardSelector from '../components/board-selector';
import { onBoardSelect, fetchBoards } from '../actions';

class BoardSelectorContainer extends Component {
  constructor(props) {
    super(props);
    this.onBoardSelect = this.onBoardSelect.bind(this);
  }

  componentWillMount() {
    return this.props.actions.fetchBoards();
  }

  onBoardSelect(id) {
    return this.props.actions.onBoardSelect(id);
  }

  render() {
    return (
      <BoardSelector
        boards={this.props.boards}
        onChange={this.onBoardSelect}
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
    }, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardSelectorContainer);
