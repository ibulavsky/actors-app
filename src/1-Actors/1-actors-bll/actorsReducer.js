import {actorsInitialState} from "./actorsInitialState";
import {
    ADD_ACTOR,
    DELETE_ACTOR,
    SET_ACTORS_SUCCESS,
    SET_CURRENT_PAGE,
    SET_LOADING,
    SET_ACTORS_COUNT
} from "./actorsActions";

export const actorsReducer = (state = actorsInitialState, action) => {
    switch (action.type) {
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.page}
        }
        case SET_ACTORS_COUNT: {
            return {...state, totalActors: action.count}
        }
        case SET_LOADING: {
            return {...state, isLoading: action.isLoading}
        }
        case SET_ACTORS_SUCCESS: {
            return {...state, actors: [...action.payload]}
        }
        case ADD_ACTOR: {
            return {...state, actors: [...state.actors, {name: action.name}]}
        }
        case DELETE_ACTOR: {
            return {...state, actors: [...state.actors.filter(a => a.name !== action.name)]}
        }
        default: {
            return state;
        }
    }
};
