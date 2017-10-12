import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduce } from 'lodash';
import Column from '../components/column';
import { createTask } from '../actions';


class ColumnContainer extends Component {
  constructor(props) {
    super(props);
    this.onCreateTask = this.onCreateTask.bind(this);
  }

  onCreateTask(name, id) {
    return this.props.actions.createTask(name, id);
  }

  render() {
    return (
      <Column
        {...this.props}
        onCreate={this.onCreateTask}
      />
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({
      createTask,
    }, dispatch),
  };
};

export default connect(() => ({}), mapDispatchToProps)(ColumnContainer);
