import { fireEvent, render } from '@testing-library/react'
import 'jsdom-global/register'
import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from '../../components/App'
import rootReducer from '../../reducers'

const store = createStore(rootReducer, {
    showTodoInputField: true,
})

// const store = createStore(rootReducer)

describe('Connected Component Full App Integretion Tests', () => {
    it('should add Todo item using fireEvent', () => {
        // to  test the add todo component we have to set the initialState
        // off showTodoInputField to true

        // container is after it is rendered to the dom
        const { container, getByTestId, getByText } = render(
            <Provider store={store}>
                <App />
            </Provider>
        )

        // select the input element
        const inputElement = getByTestId('add-todo-input')

        // // change the value of the input field
        fireEvent.change(inputElement, { target: { value: 'feed the cat' } })
        // simulate blur event
        // fireEvent.blur(inputElement)

        fireEvent.keyPress(inputElement, {
            key: 'Enter',
            code: 13,
            charCode: 13,
        })

        // fireEvent.keyDown(domNode, { key: 'A', code: 'KeyA' })

        // // click the submit button
        // fireEvent.click(getByText("Add Todo"));

        // // now we can start with the assertions
        const liElement = container.querySelector('li')
        expect(liElement.textContent).toBe('feed the cat')
        // // also test on not to be
        expect(liElement.textContent).not.toBe('jibberish')
    })
})
