import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Plus from '../components/Plus'

const mapStateToProps = (state, ownProps) => {
    console.log(state)
    return { active: ownProps.filter === state.visibilityFilter }
}

// const mapDispatchToProps = (dispatch, ownProps) => ({
const mapDispatchToProps = (dispatch) => ({
    // onClick: () => dispatch(setVisibilityFilter(ownProps.filter)),
    onClick: () => dispatch(setVisibilityFilter('SHOW_ADD_TODO')),
    // onClick: () => console.log('i got clicked'),
})

export default connect(mapStateToProps, mapDispatchToProps)(Plus)
