import {applyMiddleware, combineReducers, createStore} from "redux"
import thunkMiddleware from 'redux-thunk'
import {actorsReducer} from "../../1-Actors/1-actors-bll/actorsReducer"

const reducers = combineReducers({
    actors: actorsReducer,
   // возможность для расширения
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store
