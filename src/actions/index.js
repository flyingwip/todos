import { v4 as uuidv4 } from 'uuid'
export const addTodo = (text) => ({
    type: 'ADD_TODO',
    id: uuidv4(),
    text,
})

export const setVisibilityFilter = (filter) => ({
    type: 'SET_VISIBILITY_FILTER',
    filter,
})

export const toggleTodo = (id) => ({
    type: 'TOGGLE_TODO',
    id,
})

export const showTodoInput = (show) => ({
    type: 'SHOW_TODO_INPUT',
    show: show,
})

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE',
}
