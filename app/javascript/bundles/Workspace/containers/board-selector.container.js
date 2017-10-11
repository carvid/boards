import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import BoardSelector from '../components/board-selector';

const mapStateToProps = (state) => {
  return {
    boards: [
      {
        id: 1,
        title: 'RH',
      },
      {
        id: 2,
        title: 'Engineering',
      },
    ],
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({
      onBoardSelect: () => ({}),
    }, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardSelector);