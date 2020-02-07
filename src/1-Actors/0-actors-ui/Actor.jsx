import React from "react";
import {Avatar} from "antd"

import styles from './Actor.module.css'

const Actor = ({name}) => {
    return (
        <div className={styles.actorItem}>
            <Avatar size="large" icon="user"/>
            <span  className={styles.name}> {name} </span>
        </div>
    );
}


export default Actor;


