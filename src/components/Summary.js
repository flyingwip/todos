import React from 'react'

const Summary = ({ todos }) => {
    const completed = todos.filter((t) => t.completed).length
    let percentage = 0
    if (completed > 0) {
        percentage = Math.round(
            (todos.filter((t) => t.completed).length / todos.length) * 100
        )
    }
    // console.log(percentage)
    let blaat = `${percentage}, 100`

    console.log(blaat)

    // console.log(todos.length)
    // console.log(todos.filter((t) => t.completed).length)

    return (
        <div className="summary">
            <div className="summary__container">
                <div className="summary__col">
                    <div className="summary__graph">
                        <svg
                            viewBox="0 0 45 45"
                            className="summary__circular-chart"
                        >
                            <path
                                className="summary__circle-bg"
                                d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                 a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                            <path
                                className="summary__circle"
                                strokeDasharray={blaat}
                                d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                            <text
                                x="14"
                                y="20.35"
                                className="summary__percentage"
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
                                <span className="number">
                                    {todos.filter((t) => !t.completed).length}
                                </span>
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
