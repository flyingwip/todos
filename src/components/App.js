import React from 'react'
import AddTodo from '../containers/AddTodo'
import PlusLink from '../containers/PlusLink'
import SummaryLink from '../containers/SummaryLink'
import VisibleTodoList from '../containers/VisibleTodoList'
import Header from './Header'

const App = () => {
    const today = new Date()
    return (
        <div className="app">
            <h2 className="heading-primary">
                {today.toLocaleDateString('en-US', { weekday: 'long' })},{' '}
                {today.getDate()}
            </h2>
            <SummaryLink />
            <AddTodo />
            <Header />
            <VisibleTodoList />
            <PlusLink />
            {/* <Footer /> */}
        </div>
    )
}

export default App
