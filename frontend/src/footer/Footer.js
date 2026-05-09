import './Footer.css'

function Footer() {
    return (
        <footer className="footer">
            <div className="column left">
                <img src="/images/logo-etsii.png" alt="Logo de la Universidad de Sevilla y la ETSI Informática" />
                <img src="/images/logo-mat1.png" alt="Logo del departamento de Matemáticas Aplicadas" />
            </div>
            <div className="column right">
                <div>
                    <h4>Introduction to SIKE</h4>
                    <p>A TFG by Alba Ramos Vargas, tutored by José Armario Sámpalo Cordova.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;