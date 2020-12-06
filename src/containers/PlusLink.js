import { connect } from 'react-redux'
import { showTodoInput } from '../actions'
import Plus from '../components/Plus'

// const mapStateToProps = (state, ownProps) => {
//     return { active: ownProps.filter === state.visibilityFilter }
// }

// const mapDispatchToProps = (dispatch, ownProps) => ({
const mapDispatchToProps = (dispatch) => ({
    // onClick: () => dispatch(setVisibilityFilter(ownProps.filter)),
    onClick: () => dispatch(showTodoInput(true)),
    // onClick: () => console.log('i got clicked'),
})

export default connect(null, mapDispatchToProps)(Plus)
