import productProgressData from "../json-files/productProgress.json";

function ProductProgress() {
    return (
        <>
            {
                productProgressData.map( (value) => {
                    return (
                        <div className="progress-container" key={value.id}>
                            <div className="progress-label-row">
                                <span className="progress-label">{value.label}</span>
                                <span className="progress-value">{value.value.toLocaleString()}</span>
                            </div>
                            <div className="progress" role="progressbar" aria-label={`${value.label} Progress`}
                                aria-valuenow={value.progress}
                                aria-valuemin={0} aria-valuemax={100}>
                                <div className={`progress-bar ${value.color}${value.opacity ? " opacity-50" : ""}`}
                                    style={{ width: `${value.width ?? value.progress}%` }}></div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default ProductProgress;
