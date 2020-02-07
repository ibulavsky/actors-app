import React, {useEffect} from "react";
import styles from './Actors.module.css'
import {useDispatch, useSelector} from "react-redux"
import Actor from "./Actor"
import {Pagination} from "antd"
import {setCurrentPage} from "../1-actors-bll/actorsActions"

const Actors = () => {

    const actors = useSelector(store => store.actors.actors).map((a, index) => <Actor name={a.name} key={index}/>)
    const {currentPage, totalActors, isLoading} = useSelector(store => store.actors)
    const dispatch = useDispatch()

    useEffect(() => {
//dispatch(getAutors(currentPage))
    }, [dispatch, currentPage])

    const changePage = (page, pageSize) => {
        dispatch(setCurrentPage(page))
    }

    return (
        <div className={styles.container}>
            <div className={styles.actorsWrapper}>
                {isLoading ? <div> Loading... </div> : actors}
            </div>
            <div>
                <Pagination defaultCurrent={1} total={totalActors} current={currentPage} onChange={changePage}/>
            </div>
        </div>
    );
}


export default Actors;


