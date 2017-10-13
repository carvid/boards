import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduce } from 'lodash';
import Column from '../components/column';
import {
  createTask,
  updateColumn,
} from '../actions';


class ColumnContainer extends Component {
  constructor(props) {
    super(props);
    this.onCreateTask = this.onCreateTask.bind(this);
    this.onEdit = this.onEdit.bind(this);
  }

  onCreateTask(name, id) {
    return this.props.actions.createTask(name, id);
  }

  onEdit(title) {
    const { currentBoardId, id } = this.props;
    return this.props.actions.updateColumn(currentBoardId, id, { title });
  }

  render() {
    return (
      <Column
        {...this.props}
        onCreate={this.onCreateTask}
        onEdit={this.onEdit}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentBoardId: state.boards.current,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({
      createTask,
      updateColumn,
    }, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ColumnContainer);
