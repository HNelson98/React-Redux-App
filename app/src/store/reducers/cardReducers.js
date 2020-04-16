import { FETCH_DATA_START, FETCH_DATA_SUCCESS, FETCH_DATA_FALIURE } from "../actions/cardActions"

const initialstate ={
    data: [],
    isFetching: false,
    error: ""


}

export const magicReducer = (state = initialstate, action) =>{
    switch(action.type){
        case FETCH_DATA_START:
            return {
                ...state,
                isFetching: true
            }
        
        case FETCH_DATA_SUCCESS:
            return{
                ...state,
                data: action.payload,
                isFetching: false
            }

        case FETCH_DATA_FALIURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }

        default:
            return state
    }
}