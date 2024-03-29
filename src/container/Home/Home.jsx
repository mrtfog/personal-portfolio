import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import UseAnimations from "react-useanimations";
import arrowDown from "react-useanimations/lib/arrowDown";
import { useTranslation } from "react-i18next";
import { Argentina, Laptop } from "../../constants/icons";
import "./Home.scss";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    const [hour, setHour] = useState("");
    const { t } = useTranslation();
    useEffect(() => {
        function showHour() {
            const hour = new Date().toLocaleTimeString("es-AR");
            setHour(hour);
        }
        showHour();
        setInterval(showHour, 60000);
    }, []);

    const laptopAnimation = () => {
        gsap.to(".home__imgContainer", {
            scale: 0.5,
            ease: "ease",
            scrollTrigger: {
                trigger: ".home__container",
                scrub: 1,
                start: "top top",
                end: "bottom-=100",
                pin: true,
            },
        });
    };

    useEffect(() => {
        const handleLoad = () => {
            laptopAnimation();
        };

        window.addEventListener("load", handleLoad);

        return () => {
            window.removeEventListener("load", handleLoad);
        };
    }, []);

    return (
        <>
            <div id="Home" />
            <section className="home__container">
                <div className="home__content">
                    <div className="home__title">
                        <h1>MARTÍN FOGLIACCO</h1>
                        <div className="home__list">
                            <div>
                                <div>{t("home.firstProfession")}</div>
                            </div>
                            <div>
                                <div>{t("home.secondProfession")}</div>
                            </div>
                        </div>
                    </div>
                    <div className="home__information">
                        <div className="home__keepScrolling">
                            <UseAnimations
                                animation={arrowDown}
                                size={60}
                                strokeColor="#f5f5f5"
                            />
                            <span>{t("home.keepScrolling")}</span>
                        </div>

                        <div className="home__timezone">
                            <div>
                                <span>{t("home.myTimezone")}</span>
                                <span>{hour.slice(0, 5)}</span>
                            </div>

                            <img src={Argentina} alt="" />
                        </div>
                    </div>
                </div>

                <div className="home__filter" />

                <div className="home__gradient">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

                <div className="home__imgContainer">
                    <img src={Laptop} alt="" className="home__screenSection" />
                </div>
            </section>
        </>
    );
};

export default Home;
