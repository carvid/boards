import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduce } from 'lodash';
import Column from '../components/column';
import {
  fetchTasks,
  createTask
} from '../actions';


class ColumnContainer extends Component {
  constructor(props) {
    super(props);
    this.onCreateTask = this.onCreateTask.bind(this);
  }

  componentWillMount() {
    return this.props.actions.fetchTasks();
  }

  onCreateTask(name) {
    return this.props.actions.createTask(name);
  }

  render() {
    return (
      <Column
        title={this.props.title}
        tasks={this.props.tasks}
        onCreate={this.onCreateTask}
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
      fetchTasks,
      createTask,
    }, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ColumnContainer);
