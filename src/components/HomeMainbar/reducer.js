// import React from 'react'

const reducer = (state,action) => {
    switch(action.type){
        case "SET_LOADING":
            return {
                ...state,
                isLoading:true,
            };
        case "GET_QUESTIONS":
            return {
                ...state,
                isLoading:false,
                items : action.payload.items,

            };

        case "SEARCH_QUERY":
            return {
                ...state,
                title: action.payload,
                };
        default:
            return state;
    }
};

export default reducer