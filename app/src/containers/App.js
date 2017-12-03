/*
 * Npm import
 */
import { connect } from 'react-redux';
/*
 * Local import
 */
import App from 'src/components/App';
// import { actionCreator } from 'src/store/reducer';
/*
 * Code
 */
// State
const mapStateToProps = null;

// Actions

const mapDispatchToProps = dispatch => ({});

/*
 * Component
 */
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const AppContainer = createContainer(App);


/*
 * Export default
 */
export default AppContainer;
