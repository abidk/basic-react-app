import { connect } from "react-redux";
import List from './List';

const mapStateToProps = (state, props) => {
  return { 
    names: [...props.names, ...state.names]
  };
};

export default connect(mapStateToProps)(List);