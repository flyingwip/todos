import React from 'react'

const innerCircle = (completed, stroke) => {
    if (completed > 0) {
        return (
            <path
                className="summary__circle"
                strokeDasharray={stroke}
                d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
        )
    }
}

const Summary = ({ todos }) => {
    const completed = todos.filter((t) => t.completed).length
    const open = todos.filter((t) => !t.completed).length
    let [percentage, stroke] = [0, '0, 100']
    if (completed > 0) {
        percentage = Math.round(
            (todos.filter((t) => t.completed).length / todos.length) * 100
        )
        stroke = `${percentage}, 100`
    }

    return (
        <div className="summary">
            <div className="summary__container">
                <div className="summary__col">
                    <div className="summary__graph">
                        <svg
                            viewBox="0 0 36 36"
                            className="summary__circular-chart"
                            width="125"
                            height="125"
                        >
                            <path
                                className="summary__circle-bg"
                                d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                 a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                            {innerCircle(completed, stroke)}
                            <text
                                x="52%"
                                y="50%"
                                className="summary__percentage"
                                dominantBaseline="middle"
                                textAnchor="middle"
                            >
                                {percentage}%
                            </text>
                        </svg>
                    </div>
                </div>
                <div className="summary__col">
                    <div className="summary__list">
                        <ul>
                            <li>
                                <span className="description">Total Tasks</span>
                                <span className="number">{todos.length}</span>
                            </li>
                            <li>
                                <span className="description">Open</span>
                                <span className="number">{open}</span>
                            </li>
                            <li>
                                <span className="description">Completed</span>
                                <span className="number">
                                    {' '}
                                    {
                                        todos.filter((t) => t.completed).length
                                    }{' '}
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Summary
