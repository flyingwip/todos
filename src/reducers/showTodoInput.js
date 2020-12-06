const showTodoInputField = (state = false, action) => {
    switch (action.type) {
        case 'SHOW_TODO_INPUT':
            return action.show
        default:
            return state
    }
}

export default showTodoInputField
