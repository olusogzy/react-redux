import {FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE} "./ActionType"


const fetchUserRequest = () => {
    return{
    type: FETCH_USERS_REQUEST
    }
}

const fetchUsersSuccess = data =>{
    return{
        type: FETCH_USERS_SUCCESS,
        payload: data
    }
}

const fetchUsersFailure = error => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}


