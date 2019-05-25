import { connect } from "react-redux";
import { addName } from "../../../state/actions";
import Form from './Form'

function mapDispatchToProps(dispatch) {
    return {
        addName: payload => dispatch(addName(payload))
    };
  }

export default connect(null, mapDispatchToProps)(Form);