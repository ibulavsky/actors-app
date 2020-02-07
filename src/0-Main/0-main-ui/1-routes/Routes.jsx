import React from 'react';
import {Route, Switch} from "react-router-dom"

export const MAIN_PATH = '/';
export const ACTORS_PATH = MAIN_PATH + 'actors';

const Routes = () => {
    return (
        <div>
            <Switch>
                <Route exact path={MAIN_PATH} render={() => <div>Main</div>}/>
                <Route path={ACTORS_PATH} render={() => <div>Actors</div>}/>
                <Route path='*'
                       render={() => <div>ERROR 404. Page Not Found</div>}/>
            </Switch>
        </div>
    );
};

export default Routes;
