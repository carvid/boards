import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Board from '../components/board';

const mapStateToProps = (state) => {
  return {
    columns: [
      {
        id: 1,
        title: 'IT Department',
        position: 1,
      },
      {
        id: 2,
        title: 'QA Department',
        position: 2,
      },
    ],
  };
};

export default connect(mapStateToProps)(Board);
