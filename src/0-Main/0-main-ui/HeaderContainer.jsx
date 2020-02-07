import React from "react";
import {ACTORS_PATH, MAIN_PATH} from "./1-routes/Routes"
import {Breadcrumb, Layout} from "antd"
import {Link} from "react-router-dom"
import styles from './HeaderContainer.module.css'


const HeaderContainer = () => {
    const {Header} = Layout
    return (
        <header className={styles.header}>
            <Breadcrumb className={styles.navBar}>
                <Breadcrumb.Item>
                    <Link to={MAIN_PATH}>Main</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <Link to={ACTORS_PATH}>actors</Link>
                </Breadcrumb.Item>
            </Breadcrumb>
        </header>
    );
}


export default HeaderContainer;


