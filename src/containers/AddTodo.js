import React from 'react'
import { connect } from 'react-redux'
import { addTodo, showTodoInput } from '../actions'
import PropTypes from 'prop-types'

const AddTodo = ({ dispatch, showTodoInputField }) => {
    const onBlurHandler = (e) => {
        if (e.key === 'Enter' || e.key === undefined) {
            if (!input.value.trim()) {
                return dispatch(showTodoInput(false))
            }
            dispatch(addTodo(input.value))
            input.value = ''
            return dispatch(showTodoInput(false))
        }

        return
    }

    let input

    let visibility = showTodoInputField
        ? 'addtodo__input--visible'
        : 'addtodo__input--hidden'
    return (
        <div className={`addtodo ${visibility}`}>
            <h4>Add a task:</h4>
            <div className="addtodo__input">
                <input
                    ref={(node) => (input = node)}
                    data-testid="add-todo-input"
                    onKeyPress={onBlurHandler}
                    onBlur={onBlurHandler}
                />
            </div>
        </div>
    )
}

AddTodo.propTypes = {
    dispatch: PropTypes.func.isRequired,
    showTodoInputField: PropTypes.bool.isRequired,
}

const mapStateToProps = (state) => {
    // console.log(state.showTodoInputField)
    return { showTodoInputField: state.showTodoInputField }
}

export default connect(mapStateToProps)(AddTodo)
