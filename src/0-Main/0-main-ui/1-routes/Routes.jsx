import React from 'react';
import {Route, Switch} from "react-router-dom"
import Actors from "../../../1-Actors/0-actors-ui/Actors"

export const MAIN_PATH = '/';
export const ACTORS_PATH = MAIN_PATH + 'actors';

const Routes = () => {
    return (
        <div>
            <Switch>
                <Route exact path={MAIN_PATH} render={() => <div style={{minHeight: 'calc(100vh - 122px)'}}>Main Page</div>}/>
                <Route path={ACTORS_PATH} render={() => <Actors/>}/>
                <Route path='*'
                       render={() => <div>ERROR 404. Page Not Found</div>}/>
            </Switch>
        </div>
    );
};

export default Routes;
