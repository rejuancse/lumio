export default function Card({title, labelValue1, labelValue2, amount, badget}) {
    return (
        <div>
            <div className="card-header mb-2">
                <h2 className="card-title">{title}</h2>
                <div className="d-flex gap-3 align-items-center">
                    <div className="chart-legend-item">
                        <span className="legend-dot bg-forest-medium"></span>
                        <span className="chart-legend-label">{labelValue1}</span>
                    </div>
                    <div className="chart-legend-item">
                        <span className="legend-dot bg-lime-accent"></span>
                        <span className="chart-legend-label">{labelValue2}</span>
                    </div>
                </div>
            </div>

            {amount && badget ? (
                <div className="d-flex align-items-baseline gap-2 mb-3">
                    <span className="stat-value-amount">{amount}</span>
                    <span className="trend-badge trend-up fs-xs">{badget}</span>
                </div>
            ) : null}
        </div>
    )
}
