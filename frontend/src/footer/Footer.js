import "./Footer.css"
import {useTranslation} from "react-i18next";

function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="footer" id="footer">
            <div className="footer-image" id="footer-image">
                <img src="/images/logo-etsii.png" alt="Logo de la Universidad de Sevilla y la ETSI Informática" />
            </div>
            <div className="footer-title" id="footer-title">
                <h1 className="quantico-regular">{t("footer.title")}</h1>
            </div>
            <div className="footer-navigation" id="footer-navigation">
                <a href="/">{t("navbar.home")}</a>
                <a href="/protocols">{t("navbar.protocols")}</a>
                <a href="/protocols/proof-of-identity">{t("navbar.proofOfIdentity")}</a>
                <a href="/protocols/key-exchange">{t("navbar.keyExchange")}</a>
                <a href="/protocols/encryption">{t("navbar.encryption")}</a>
                <a href="/about">{t("navbar.about")}</a>
            </div>
            <div className="footer-subtitle" id="footer-subtitle">
                <p>{t("footer.subtitle")}<a href="mailto:albramvar1@alum.us.es">Alba Ramos Vargas</a></p>
            </div>
        </footer>
    )
}

export default Footer;