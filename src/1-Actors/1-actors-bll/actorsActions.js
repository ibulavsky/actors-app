export const SET_ACTORS_SUCCESS = 'ACTORS-APP/ACTORS/SET_ACTORS_SUCCESS';
export const ADD_ACTOR = 'ACTORS-APP/ACTORS/ADD_ACTOR';
export const DELETE_ACTOR = 'ACTORS-APP/ACTORS/DELETE_ACTOR';
export const SET_LOADING = 'ACTORS-APP/ACTORS/SET_LOADING';
export const SET_CURRENT_PAGE = 'ACTORS-APP/ACTORS/SET_CURRENT_PAGE';


export const setActors = (payload) => ({
    type: SET_ACTORS_SUCCESS,
    payload,
});

export const addActor = (name) => ({
    type: ADD_ACTOR,
    name,
});

export const deleteActor = (name) => ({
    type: DELETE_ACTOR,
    name,
});

export const setLoading = (isLoading) => ({
    type: SET_LOADING,
    isLoading,
});

export const setCurrentPage = (page) => ({
    type: SET_CURRENT_PAGE,
    page,
});

