import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduce, includes } from 'lodash';
import Board from '../components/board';
import {
  createColumn,
  updateBoard,
  fetchBoards,
  setCurrentBoard,
} from '../actions';

class BoardContainer extends Component {
  constructor(props) {
    super(props);

    this.onCreate = this.onCreate.bind(this);
    this.onEdit = this.onEdit.bind(this);
  }

  componentWillMount() {
    if (!this.props.id) {
      this.props.actions.fetchBoards()
        .then(() => this.props.actions.setCurrentBoard({ id: this.props.match.params.id }));
    }
  }

  onCreate(id, title) {
    this.props.actions.createColumn(id, title);
  }

  onEdit(id, title) {
    this.props.actions.updateBoard(id, { title });
  }

  render() {
    const { id, columns, title } = this.props;
    return (
      <Board
        id={id}
        columns={columns}
        title={title}
        onAddColumn={this.onCreate}
        onEdit={this.onEdit}
      />
    );
  }
}

const mapStateToProps = (state) => {
  const board = { ...state.boards.byId[state.boards.current] };

  if (!board) return {};

  return {
    ...hydrateBoard(state, board),
  }
};

const hydrateBoard = (state, board) => {
  const columns = reduce(state.columns.byId, (res, column) => {
    if (includes(board.columns, column.id)) {
      res.push(hydrateColumn(state, { ...column }));
    }
    return res;
  }, []);

  board.columns = columns;

  return { ...board };
};

const hydrateColumn = (state, column) => {
  const tasks = reduce(state.tasks.byId, (res, task) => {
    if (includes(column.tasks, task.id)) {
      res.push(task);
    }

    return res;
  }, []);

  column.tasks = tasks;

  return { ...column };
};


const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({
      createColumn,
      updateBoard,
      fetchBoards,
      setCurrentBoard,
    }, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardContainer);
