import React from 'react'
import { VisibilityFilters } from '../actions'
import FilterLink from '../containers/FilterLink'

const Header = () => {
    return (
        <ul className="header">
            {/* <h4 className="heading-secondary">Tasks</h4> */}
            <li className="heading-secondary header__item">Tasks</li>
            <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
                Completed
            </FilterLink>
            <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Open</FilterLink>
            <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
        </ul>
    )
}

export default Header
