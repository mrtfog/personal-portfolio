import React, { useState } from "react";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import {
    PersonalLogo,
    Spain,
    UnitedKingdom,
    ArrowDown,
} from "../../constants/icons";
import "./Navbar.scss";

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [language, setLanguage] = useState(i18n.language);
    const [checked, setChecked] = useState(false);

    const handleLanguage = (lang) => {
        setLanguage(lang);
        i18n.changeLanguage(lang);
    };

    const handleMenu = (event) => {
        setChecked(event.target.checked);
    };

    return (
        <nav className="nav">
            <a href="#home">
                <img src={PersonalLogo} alt="" className="nav_logo" />
            </a>

            <div className="nav__menu">
                <div className="menu-icon">
                    <input
                        className="menu-icon__cheeckbox"
                        type="checkbox"
                        onChange={(e) => handleMenu(e)}
                    />
                    <div>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <nav
                    className={`nav__list ${checked ? "visible" : "invisible"}`}
                >
                    <ul>
                        <li>
                            {" "}
                            <Link
                                activeClass="active"
                                to="Home"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                            >
                                <span>{t("navbar.home")}</span>
                            </Link>{" "}
                        </li>
                        <li>
                            {" "}
                            <Link
                                activeClass="active"
                                to="Portfolio"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                            >
                                <span>{t("navbar.portfolio")}</span>
                            </Link>{" "}
                        </li>
                        <li>
                            {" "}
                            <Link
                                activeClass="active"
                                to="AboutMe"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                            >
                                <span>{t("navbar.about")}</span>
                            </Link>{" "}
                        </li>
                        <li>
                            {" "}
                            <Link
                                activeClass="active"
                                to="ContactMe"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                            >
                                <span>{t("navbar.contact")}</span>
                            </Link>{" "}
                        </li>
                    </ul>
                </nav>
            </div>

            <div className="nav__utilities">
                {language === "es" ? (
                    <div
                        className="nav__language"
                        onClick={() => handleLanguage("en")}
                    >
                        <img src={Spain} alt="Spanish" />
                        <ArrowDown />
                    </div>
                ) : (
                    <div
                        className="nav__language"
                        onClick={() => handleLanguage("es")}
                    >
                        <img src={UnitedKingdom} alt="English" />
                        <ArrowDown />
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
