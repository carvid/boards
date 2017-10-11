import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Board from '../components/board';

const mapStateToProps = (state) => {
  const board = state.boards.byId[state.boards.current];
  if (!board) {
    return { columns: [] };
  } else {
    return { columns: board.columns };
  }
};

export default connect(mapStateToProps)(Board);
