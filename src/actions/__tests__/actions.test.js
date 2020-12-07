import * as actions from '../index'
import { v4 as uuidv4 } from 'uuid'

describe('Test suite for Actions', () => {
    it('should create an action to add Todo', () => {
        const text = 'go shopping'
        const expectedAction = {
            type: 'ADD_TODO',
            id: uuidv4(),
            text,
        }

        expect(actions.addTodo(text).text).toEqual(expectedAction.text)
    })

    it('should create an action to set visibility filter', () => {
        const filter = 'SHOW_ALL'
        expect(actions.setVisibilityFilter(filter).filter).toEqual(filter)
        // make sure something else is false
        expect(actions.setVisibilityFilter(filter).filter).not.toBe(
            'SHOW_ACTIVE'
        )
    })

    it('should create an action to toggle a Todo', () => {
        const testId = uuidv4()

        const expectedAction = {
            type: 'TOGGLE_TODO',
            id: testId,
        }
        expect(actions.toggleTodo(testId)).toEqual(expectedAction)
    })
})
