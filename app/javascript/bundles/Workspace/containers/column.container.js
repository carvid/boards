import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Column from '../components/column';

const mapStateToProps = (state) => {
  return {
    tasks: [
      {
        id: 1,
        title: 'Repair cable wires',
        position: 1,
      },
      {
        id: 2,
        title: 'Clean server',
        position: 2,
      },
    ],
  };
};

export default connect(mapStateToProps)(Column);
