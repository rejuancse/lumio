function AlertCard() {
    return (
        <div className="card alert-green-card">
            <div className="position-relative z-index-2">
                <span className="alert-green-badge">Update</span>
                <div className="alert-green-date">Feb 14th 2026</div>
                <div className="alert-green-text">Sales revenue increased 40% in 1 week</div>
            </div>
            <a href="#" className="alert-green-link z-index-2" id="alert-link-statistics">
                <span>See Statistics</span>
                <i className="bi bi-arrow-right"></i>
            </a>

            <svg className="alert-green-bg-shape" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g transform="translate(50,50)">
                    <rect x="-6" y="-45" width="12" height="90" rx="6" ry="6" fill="#B4F105" />
                    <rect x="-6" y="-45" width="12" height="90" rx="6" ry="6" fill="#B4F105" transform="rotate(60)" />
                    <rect x="-6" y="-45" width="12" height="90" rx="6" ry="6" fill="#B4F105" transform="rotate(120)" />
                </g>
            </svg>
        </div>
    )
}

export default AlertCard;
