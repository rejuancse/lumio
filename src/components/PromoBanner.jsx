function PromoBanner({ title, description, buttonText, onAction }) {
    return (
        <div className="promo-banner-card">
            <svg className="promo-banner-bg-shape" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g transform="translate(50,50)">
                    <rect x="-6" y="-45" width="12" height="90" rx="6" ry="6" fill="#B4F105" />
                    <rect x="-6" y="-45" width="12" height="90" rx="6" ry="6" fill="#B4F105" transform="rotate(60)" />
                    <rect x="-6" y="-45" width="12" height="90" rx="6" ry="6" fill="#B4F105" transform="rotate(120)" />
                </g>
            </svg>

            <h3 className="promo-title">{title}</h3>
            <p className="promo-desc">{description}</p>
            <button
                type="button"
                className="btn-promo"
                onClick={onAction}
                >
                {buttonText}
            </button>
        </div>
    )
}

export default PromoBanner;
