import React, { useState } from "react";
import { Navbar, Information } from "./components/index";
import { Home, Contact } from "./container/index";
import "./app.scss";
import "./constants/translations/i18n";

const App = () => {
    return (
        <>
            <Navbar />
            <main>
                <Home />
                <Information />
                <Contact />
            </main>
        </>
    );
};

export default App;
