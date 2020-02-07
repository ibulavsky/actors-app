import React from "react";
import styles from './Actors.module.css'
import {useSelector} from "react-redux"
import Actor from "./Actor"

const Actors = () => {

    const actors = useSelector(store => store.actors.actors).map((a, index) => <Actor name={a.name} key={index}/>)

    return (
        <div className={styles.wrapper}>
            {actors}
        </div>
    );
}


export default Actors;


