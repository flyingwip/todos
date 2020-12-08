import { connect } from 'react-redux'
import Summary from '../components/Summary'

const mapStateToProps = (state) => ({ todos: state.todos })

export default connect(mapStateToProps)(Summary)
