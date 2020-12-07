import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './components/App'
import rootReducer from './reducers'
import './sass/main.scss'
import { v4 as uuidv4 } from 'uuid'

const store = createStore(rootReducer, {
    todos: [
        {
            id: uuidv4(),
            text: 'Take the coat to dry cleaning',
            completed: false,
        },
        { id: uuidv4(), text: "Fix mom's bike ", completed: false },
        { id: uuidv4(), text: 'Feed the cat', completed: false },
    ],
})

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
