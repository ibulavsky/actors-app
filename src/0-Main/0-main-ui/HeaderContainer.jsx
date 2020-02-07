import React from "react";
import {ACTORS_PATH, MAIN_PATH} from "./1-routes/Routes"
import {Breadcrumb} from "antd"
import {Link} from "react-router-dom"
import styles from './HeaderContainer.module.css'


const HeaderContainer = () => {
    return (
        <header className={styles.header}>
            <div>
                <Breadcrumb className={styles.navBar}>
                    <Breadcrumb.Item>
                        <Link to={MAIN_PATH}>Main</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <Link to={ACTORS_PATH}>actors</Link>
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className={styles.addForm}>
                add form
            </div>
        </header>
    );
}


export default HeaderContainer;


