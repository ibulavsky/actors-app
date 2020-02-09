import React, {useState} from "react";
import {Button, Input, Modal} from 'antd';
import {useDispatch} from "react-redux";
import {addActor} from "../../../1-Actors/1-actors-bll/actorsActions";
import {validateItem} from "../../../9-Helpers/validateForm";
import styles from './AddForm.module.css';

const AddForm = () => {

    const [autorName, setAutorName] = useState('');
    const [error, setError] = useState('');
    const dispatch = useDispatch();

    const onSetName = (e) => {
        setAutorName(e.currentTarget.value)
    };

    const onAddAutor = () => {
        const errorMessage = validateItem(autorName)
        if (errorMessage) {
            setError(errorMessage)
            return;
        }
        dispatch(addActor(autorName))
        setAutorName('')
    };

    if (error) {
        Modal.error({title: 'This is an error message', content: error});
        setError('')
    }

    return (
        <div className={styles.addForm}>
            <Input placeholder="Please input name" value={autorName}
                   onChange={onSetName}/>
            <Button type="primary" htmlType="submit" disabled={false} onClick={onAddAutor}>
                Add
            </Button>
        </div>
    )
};


export default AddForm;
