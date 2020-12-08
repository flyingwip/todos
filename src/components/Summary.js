import React from 'react'

const Summary = () => {
    return (
        <div className="summary">
            <div className="summary__container">
                <div className="summary__col">
                    <div className="summary__graph">
                        <svg viewBox="0 0 45 45" className="circular-chart">
                            <path
                                className="circle-bg"
                                d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                 a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                            <path
                                className="circle"
                                strokeDasharray="66, 100"
                                d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                            <text x="14" y="20.35" className="percentage">
                                30%
                            </text>
                        </svg>
                    </div>
                </div>
                <div className="summary__col">
                    <div className="summary__list">
                        <ul>
                            <li>
                                <span className="description">Total Tasks</span>
                                <span className="number">100</span>
                            </li>
                            <li>
                                <span className="description">Open</span>
                                <span className="number">8</span>
                            </li>
                            <li>
                                <span className="description">Completed</span>
                                <span className="number">23</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Summary
