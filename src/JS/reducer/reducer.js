import { FILTRER_PAR_NOM } from "../constants/constant";
import { movie } from "../../Movie";
export const rootReducer =(state = movie , action) => {
    switch (action.type) {
        case FILTRER_PAR_NOM:
            if(action.payload){
                const filterList = state.filter(item => item.title.toUpperCase().indexOf(action.payload.toUpperCase()) > -1)
                return filterList
            }else return state
          
        default:
            return state
    }
}