
import './Footer.css';

function Footer(){
    return(
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; 2023 Book App. Todos los derechos reservados.</p>
                <ul className="social-media">
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Twitter</a></li>
                    <li><a href="#">Instagram</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;