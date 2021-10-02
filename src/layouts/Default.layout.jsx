import React from "react";

import Navbar from "../components/Navbar/navbar.component";
import HeroCarousal from "../components/HeroCarousal/HeroCarousal.component.js";

const DefaultLayout = () => {
    return (
        <>
            <Navbar />
            <HeroCarousal />
            {props.children}
        </>
    );
};

export default DefaultLayout;