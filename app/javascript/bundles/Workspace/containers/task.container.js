import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduce } from 'lodash';
import Task from '../components/task';
import { fetchTask, updateTask, removeTask } from '../actions';

class TaskContainer extends React.Component {
  constructor(props) {
    super(props);
    this.onUpdate = this.onUpdate.bind(this);
    this.onRemove = this.onRemove.bind(this);
  }

  onUpdate(title) {
    this.props.actions.updateTask(this.props.id, { title });
  }

  onRemove(id) {
    this.props.actions.removeTask(this.props.id, this.props.columnId);
  }

  render() {
    return (
      <Task
        {...this.props}
        onUpdate={this.onUpdate}
        onRemove={this.onRemove}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return ownProps;
};

const mapDispatchToProps = (dispatch) => {

  return {
    actions: bindActionCreators({
      fetchTask,
      updateTask,
      removeTask,
    }, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskContainer);
