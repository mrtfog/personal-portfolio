import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";
import { PortfolioCard } from "../../components/index";
import { projects } from "../../constants/resources";
import "./Portfolio.scss";

const Portfolio = () => {
    const { t } = useTranslation();

    return (
        <section className="portfolio__container" id="Portfolio">
            <div className="portfolio__wrapper">
                <div className="portfolio__description">
                    <h2>{t("portfolio.title")}</h2>
                    <p>
                        {t("portfolio.description")}
                        {/* <a
                            href="#contact"
                            className="portfolio__contact_redirection"
                        >
                            contact me
                        </a>{" "} */}
                    </p>
                </div>

                <div className="portfolio__cards_container">
                    {projects.length
                        ? projects.map((project, projectIdx) => {
                              return (
                                  <Fragment key={projectIdx}>
                                      <PortfolioCard data={project} />
                                  </Fragment>
                              );
                          })
                        : ""}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
