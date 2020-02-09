import {applyMiddleware, combineReducers, compose, createStore} from "redux"
import thunkMiddleware from 'redux-thunk'
import {actorsReducer} from "../../1-Actors/1-actors-bll/actorsReducer"

const reducers = combineReducers({
    actors: actorsReducer,
    // возможность для расширения
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));
export default store
