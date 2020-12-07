import React from 'react'
// import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import PlusLink from '../containers/PlusLink'

const App = () => (
    <div className="app">
        {/* <i className="icon-basic-world"></i> */}
        <h2 className="heading-primary">Today</h2>
        <AddTodo />
        <VisibleTodoList />
        <PlusLink />
        {/* <Footer /> */}
    </div>
)

export default App
