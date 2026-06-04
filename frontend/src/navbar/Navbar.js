import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { DropdownMenu, DropdownMenuItem } from '#components/DropdownMenu';
import { useTranslation } from "react-i18next";

const languages = {
    en: { nativeName: "English" },
    es: { nativeName: "Español" },
}

function Navbar() {
    const [pathname, setPathname] = useState(window.location.pathname);
    const updatePathname = (newPathname) => { setPathname(newPathname); };
    const { t, i18n } = useTranslation();

    return (
        <nav className="navbar" id="navbar">
            <div className="nav-links">
                <div className="home-link">
                    <Link aria-label="home" to="/" className={pathname.length <= 1 ? "active" : ""} onClick={() => updatePathname("/")}>{t("navbar.home")}</Link>
                </div>
                <div className="protocol-links">
                    <div className="nav-links">
                        <div>
                            <Link aria-label="proof-of-identity" to="/protocols/proof-of-identity" className={pathname.includes("proof-of-identity") ? "active" : ""} onClick={() => updatePathname("/protocols/proof-of-identity")}>{t("navbar.proofOfIdentity")}</Link>
                        </div>
                        <div>
                            <Link aria-label="key-exchange" to="/protocols/key-exchange" className={pathname.includes("key-exchange") ? "active" : ""} onClick={() => updatePathname("/protocols/key-exchange")}>{t("navbar.keyExchange")}</Link>
                        </div>
                        <div>
                            <Link aria-label="encryption" to="/protocols/encryption" className={pathname.includes("encryption") ? "active" : ""} onClick={() => updatePathname("/protocols/encryption")}>{t("navbar.encryption")}</Link>
                        </div>
                    </div>
                </div>
                <div className="about-link">
                    <Link aria-label="about" to={"/about"} className={pathname.includes("about") ? "active" : ""} onClick={() => updatePathname("/about")}>{t("navbar.about")}</Link>
                </div>
            </div>
            <div className="language-toggle">
                <DropdownMenu trigger={
                    <div className="language-trigger" id="language-trigger">
                        <img src={`/languages/${t("currentLanguage")}.png`} alt="Current language flag identifier" id="current-language-flag" />
                    </div>
                }>
                    { Object.keys(languages).map((lng) => (
                        <DropdownMenuItem key={lng} id={lng + "menu-item"} onClick={() => i18n.changeLanguage(lng)}>
                            <img src={`/languages/${lng}.png`} alt="Language flag" />
                            {languages[lng].nativeName}
                        </DropdownMenuItem>
                    )) }
                </DropdownMenu>
            </div>
        </nav>
    );
}

export default Navbar;
