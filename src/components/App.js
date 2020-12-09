import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import SummaryLink from '../containers/SummaryLink'
import VisibleTodoList from '../containers/VisibleTodoList'
import PlusLink from '../containers/PlusLink'

const App = () => {
    const today = new Date()
    return (
        <div className="app">
            {/* <i className="icon-basic-world"></i> */}
            <h2 className="heading-primary">
                {today.toLocaleDateString('en-US', { weekday: 'long' })},{' '}
                {today.getDate()}
            </h2>
            <SummaryLink />
            <AddTodo />
            <VisibleTodoList />
            <PlusLink />
            <Footer />
        </div>
    )
}

export default App
