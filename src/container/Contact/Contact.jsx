import React from "react";
import { Ellipses } from "../../components";
import { useTranslation } from "react-i18next";
import "./Contact.scss";

const Contact = () => {
    const { t } = useTranslation();
    return (
        <>
            <section className="contact__container" id="ContactMe">
                <div className="contact__filter" />
                <div className="contact__content">
                    <div className="contact__title">
                        <h2>{t("contact.title")}</h2>
                    </div>

                    <div className="contact__description">
                        <p>
                            {t("contact.description")}
                            {/* <a href='mailto:fogliaccomartin3@gmail.com'>email</a> or <a href='https://www.linkedin.com/in/martin-fogliacco/?locale=en_US' target={'_blank'}>reach me out</a>. */}
                        </p>
                    </div>
                </div>

                <div className="contact_ellipses">
                    <Ellipses
                        isRed={false}
                        height={"250px"}
                        width={"400px"}
                        top={"50%"}
                        left={"40%"}
                    />
                    <Ellipses
                        isRed={true}
                        height={"250px"}
                        width={"400px"}
                        top={"50%"}
                        left={"60%"}
                    />
                </div>
            </section>
        </>
    );
};

export default Contact;
