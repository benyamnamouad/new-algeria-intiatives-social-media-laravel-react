import axios from 'axios';

export const FETCH_INITS = 'FETCH_INITS';
export const FETCH_INITS_COUNT = 'FETCH_INITS_COUNT';


export function fetchInits() {
    return function(dispatch) {
        axios.get('/inits').then(function (response) {
            console.log("Here Iniits")
            dispatch({type: FETCH_INITS, payload: response});
            return true;

        }).catch(function (error) {
            return error;
        });
    }
}

export function fetchInitsCount() {
    return function (dispatch){
        axios.get('/initsCount').then(function (response) {
            console.log("here Count")
            dispatch({type: FETCH_INITS_COUNT, payload: response});
            return true;

        }).catch(function (error) {
            return error;
        });
    }

}
