import React from 'react'
import { connect } from 'react-redux'
import { addTodo, showTodoInput } from '../actions'
import PropTypes from 'prop-types'

const AddTodo = ({ dispatch, showTodoInputField }) => {
    const blaat = () => {
        dispatch(addTodo(input.value))
        input.value = ''
        return dispatch(showTodoInput(false))
    }

    let input

    if (!showTodoInputField) {
        return false
    }
    return (
        <div className="addtodo">
            <h4>Add a task:</h4>
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    if (!input.value.trim()) {
                        return
                    }
                    dispatch(addTodo(input.value))
                    input.value = ''
                }}
            >
                <div className="addtodo__input">
                    <input
                        ref={(node) => (input = node)}
                        data-testid="add-todo-input"
                        onBlur={blaat}
                    />
                </div>

                {/* <button type="submit">Add Todo</button> */}
            </form>
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
