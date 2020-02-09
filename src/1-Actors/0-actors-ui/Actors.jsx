import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Actor from "./Actor";
import {Icon, Pagination} from "antd";
import {setCurrentPage} from "../1-actors-bll/actorsActions";
import {getActors} from "../1-actors-bll/actorsThunks";
import styles from './Actors.module.css';

const Actors = () => {

    const actors = useSelector(store => store.actors.actors).map((a, index) => <Actor name={a.name} key={index}/>);
    const {currentPage, totalActors, isLoading} = useSelector(store => store.actors);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getActors(currentPage))
    }, [dispatch, currentPage]);

    const changePage = (page, pageSize) => {
        dispatch(setCurrentPage(page))
    };

    return (
        <div className={styles.container}>
            <div className={styles.actorsWrapper}>
                {isLoading ? <div><Icon type='loading' style={{fontSize: '30px'}}/></div> : actors}
            </div>
            <div>
                <Pagination defaultCurrent={1} total={totalActors} current={currentPage} onChange={changePage}
                            disabled={isLoading}/>
            </div>
        </div>
    );
};


export default Actors;


