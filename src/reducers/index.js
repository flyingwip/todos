import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import showTodoInputField from './showTodoInput'

export default combineReducers({
    todos,
    visibilityFilter,
    showTodoInputField,
})
