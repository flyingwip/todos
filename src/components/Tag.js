import React from 'react'
import PropTypes from 'prop-types'

const Tag = ({ active, children, onClick }) => {
    // console.log(active)

    const highlight = active ? 'btn--highlight' : ''

    const styling = `header__item btn btn--tag ${highlight}`
    return (
        <li onClick={onClick} disabled={active} className={styling}>
            {children}
        </li>
    )
}

Tag.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default Tag
