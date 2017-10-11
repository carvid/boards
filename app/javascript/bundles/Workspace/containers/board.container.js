import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduce, includes } from 'lodash';
import Board from '../components/board';
import { createColumn } from '../actions';

class BoardContainer extends Component {
  constructor(props) {
    super(props);

    this.onCreate = this.onCreate.bind(this);
  }

  onCreate(id, title) {
    this.props.actions.createColumn(id, title);
  }

  render() {
    const { id, columns, title } = this.props;
    return (
      <Board
        id={id}
        columns={columns}
        title={title}
        onAddColumn={this.onCreate}
      />
    );
  }
}

const mapStateToProps = (state) => {
  const board = state.boards.byId[state.boards.current];

  if (!board) return { id: '', title: '', columns: [] };

  const columns = reduce(state.columns.byId, (res, column) => {
    if (includes(board.columns, column.id)) {
      res.push(column);
    }
    return res;
  }, []);

  board.columns = columns;

  return {
    ...board,
  }
};


const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({
      createColumn,
    }, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardContainer);
