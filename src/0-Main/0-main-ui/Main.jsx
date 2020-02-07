import React from 'react';
import HeaderContainer from "./0-main-header/HeaderContainer"
import Routes from "./1-main-routes/Routes"
import FooterContainer from "./2-main-footer/FooterContainer"

const Main = () => {
    return (
        <>
            <HeaderContainer/>
            <Routes/>
            <FooterContainer/>
        </>
    );
};

export default Main;
