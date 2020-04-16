import axios from 'axios'
export const FETCH_DATA_START ="FETCH_DATA_START"
export const FETCH_DATA_SUCCESS= "FETCH_DATA_SUCCESS"
export const FETCH_DATA_FALIURE= "FETCH_DATA_FALIURE"

export function fetchData() {
    return dispatch => {
        dispatch({type:FETCH_DATA_START});
    axios.get("https://api.magicthegathering.io/v1/cards")
    .then(res => {
        console.log("axios call:", res)
        dispatch({ 
            type: FETCH_DATA_SUCCESS, 
             payload: res.data.cards 
        })
    })
    .catch(err => {
        dispatch({

            type: FETCH_DATA_FALIURE,
            payload: `Error ${err.response.status}: ${err.response.data}`
        })
    });
    }
}