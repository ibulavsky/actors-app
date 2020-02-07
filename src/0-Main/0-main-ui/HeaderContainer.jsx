import React from "react";
import {ACTORS_PATH, MAIN_PATH} from "./1-routes/Routes"
import {Breadcrumb} from "antd"
import {Link} from "react-router-dom"

const Header = () => (
    <div>
        <Breadcrumb style={{margin: '16px 0'}}>
            <Breadcrumb.Item>
                <Link to={MAIN_PATH}>Main</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
                <Link to={ACTORS_PATH}>actors</Link>
            </Breadcrumb.Item>
        </Breadcrumb>
    </div>
);

export default Header;


