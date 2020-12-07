import todos from '../todos'
import * as actions from '../../actions/index'
import validate from 'uuid-validate'
import { v4 as uuidv4 } from 'uuid'
import {
    ADD_TODO,
    SET_VISIBILITY_FILTER,
    TOGGLE_TODO,
} from '../../actions/types'

describe('Todos Reducer Unit Tests', () => {
    it('should return an empty array when initial state and action are undefined', () => {
        expect(todos(undefined, {})).toEqual([])
    })

    it('should update (initial) state when a todo is added', () => {
        // first create an action
        let description = 'Water the plants'
        let action = actions.addTodo(description)
        // add the action to the reducer
        let todoList = todos([], action)
        // todoList should be an array
        // test if uuid is valid
        expect(validate(todoList[0].id)).toBe(true)
        expect(todoList[0].text).toContain(description)
        expect(todoList[0].completed).toBe(false)

        // // add another todo
        description = 'feed the cat'
        action = actions.addTodo(description)
        // // give the new state as first parameter
        todoList = todos(todoList, action)

        expect(todoList.length).toEqual(2)
    })

    it('should toggle incomplete Todo to complete', () => {
        const testId = uuidv4()
        const initialState = {
            id: testId,
            text: 'Feed the cat',
            completed: true,
        }

        const toggleTodoAction = {
            type: TOGGLE_TODO,
            id: testId,
        }

        let todoList = todos([initialState], toggleTodoAction)
        expect(todoList[0].completed).toBe(false)

        // do another toggle
        todoList = todos(todoList, toggleTodoAction)
        expect(todoList[0].completed).toBe(true)
    })
})
