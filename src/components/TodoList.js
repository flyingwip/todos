import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({ todos, toggleTodo }) => (
    <div>
        <h4 className="heading-secondary">Tasks</h4>
        <div className="list-mask">
            <ul className="todolist">
                {todos.map((todo) => (
                    <Todo
                        key={todo.id}
                        {...todo}
                        onClick={() => toggleTodo(todo.id)}
                    />
                ))}
            </ul>
        </div>
    </div>
)

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired,
    toggleTodo: PropTypes.func.isRequired,
}

export default TodoList
