function Footer() {
    return (
        <footer className="footer-custom">
            <div className="footer-left">
                <span className="footer-logo">
                    <i className="bi bi-asterisk"></i> Lumio Admin
                </span>
                <span className="footer-separator">|</span>
                <span className="footer-copy">
                    &copy; 2026 Made with <i className="bi bi-heart-fill text-danger footer-heart"></i>
                    by <a href="#" target="_blank">Lumio Admin</a>
                    • Distributed by <a href="#" target="_blank">Rejuan Ahamed</a>
                </span>
            </div>
            <div className="footer-right">
                <ul className="footer-links">
                    <li><a href="#" className="footer-link">Overview</a></li>
                    <li><a href="#" className="footer-link">Statistics</a></li>
                    <li><a href="#" className="footer-link">Help &amp; Documentation</a></li>
                    <li><a href="#" className="footer-link">Status <span className="status-dot"></span></a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;
