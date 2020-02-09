import {setActors, setActorsCount, setCurrentPage, setLoading} from "./actorsActions"
import {apiActors} from "../2-actors-dal/api"

export const getActors = (currentPage) =>
    async (dispatch) => {
        try {
            dispatch(setLoading(true))
            const {count, results} = await apiActors.getActors(currentPage)
            dispatch(setCurrentPage(currentPage))
            dispatch(setActorsCount(count))
            dispatch(setActors(results))
            dispatch(setLoading(false))
        } catch (e) {
            console.log(e.message)
        }
    };
