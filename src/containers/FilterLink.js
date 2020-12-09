import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'
import Tag from '../components/Tag'

const mapStateToProps = (state, ownProps) => {
    return { active: ownProps.filter === state.visibilityFilter }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Tag)
