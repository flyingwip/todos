import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, completed, text, id }) => (
    <li
        className="todolist__todo"
        style={{
            textDecoration: completed ? 'line-through' : 'none',
        }}
    >
        <input
            type="checkbox"
            className="todolist__radio-input"
            value="1"
            id={id}
            name={id}
            onClick={onClick}
        />
        <label htmlFor={id} className="todolist__radio-label">
            <span className="todolist__radio-button"></span>
            &nbsp;{text}
        </label>
    </li>
)

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
}

export default Todo
