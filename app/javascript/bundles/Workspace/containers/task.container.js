import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduce } from 'lodash';
import Task from '../components/task';
import { onBoardSelect, fetchTasks } from '../actions';

const mapStateToProps = (state) => {
  const task = state.columns.byId[task_id]
  return {
    task,
  }
};

const mapDispatchToProps = (dispatch) => {

  return {
    actions: bindActionCreators({
      fetchTasks
    }, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Task);
