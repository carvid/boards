import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduce } from 'lodash';
import Task from '../components/task';
import { fetchTask, updateTask } from '../actions';

class TaskContainer extends React.Component {
  constructor(props) {
    super(props);
    this.onUpdate = this.onUpdate.bind(this);
  }

  onUpdate(title) {
    this.props.actions.updateTask(this.props.columnId, this.props.id, { title });
  }

  render() {
    return (
      <Task
        {...this.props}
        onUpdate={this.onUpdate}
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
    }, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskContainer);
