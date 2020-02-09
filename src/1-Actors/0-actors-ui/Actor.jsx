import React from "react";
import {Avatar, Icon} from "antd"
import styles from './Actor.module.css'
import {useDispatch} from "react-redux"
import {deleteActor} from "../1-actors-bll/actorsActions"


const Actor = ({name}) => {

    const dispatch = useDispatch()
    const onDelete = () => {
        dispatch(deleteActor(name))
    }

    return (
        <div className={styles.actorItem}>
            <Avatar size="large" icon="user"/>
            <span className={styles.name}> {name} </span>
            <Icon type="rest" theme="filled" onClick={onDelete}
                  style={{fontSize: '20px', color: '#08c'}}/>
        </div>
    );
}


export default Actor;


