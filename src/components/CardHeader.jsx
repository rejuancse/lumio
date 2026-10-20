function CardHeader({ title, values }) {
    const buttonId = `btn-more-${title.toLowerCase().replace(/\s+/g, "-")}`;

    return (
        <div className="card-header">
            <h2 className="card-title">{title}</h2>
            <div className="dropdown">
                <button className="card-more-btn" type="button" data-bs-toggle="dropdown" aria-expanded="false"
                    aria-label="More Options" id={buttonId}>
                    <i className="bi bi-three-dots"></i>
                </button>
                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-custom">
                    {
                        values.map( (value, index) => {
                            return (
                                <li key={index}>
                                    <a className="dropdown-item" href={value.link}>
                                        <i className={value.icon}></i>
                                        {value.title}
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default CardHeader;
