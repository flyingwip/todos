import React from 'react'
import PropTypes from 'prop-types'

const Plus = ({ onClick }) => (
    <div onClick={onClick} className="btn btn--plus">
        +
    </div>
)

Plus.propTypes = {
    onClick: PropTypes.func.isRequired,
}

export default Plus
