import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduce } from 'lodash';
import Task from '../components/task';


const mapStateToProps = (state) => {
  const task = state.columns.byId[task_id]
  return {
    task,
  }
};

const mapDispatchToProps = (dispatch) => {

  return {
    actions: bindActionCreators({
    }, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Task);
