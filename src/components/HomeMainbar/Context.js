import React, { useContext, useReducer, useEffect } from 'react';
import reducer from './reducer';

let API = "https://api.stackexchange.com/2.3/search?pagesize=10&order=desc&sort=activity&";
let LAPI = "&site=stackoverflow"
let initialState ={
    isLoading:true,
    tags:"",
    title:"Angular",
    view_count:0,
    answer_count:0,
    items:[],
};

const AppContext = React.createContext();
const AppProvider = ({children}) => {

    const [state ,dispatch ] = useReducer(reducer, initialState);
    const fetchApiData =async (url) => {
        dispatch({type:"SET_LOADING"});
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            dispatch({
                type:"GET_QUESTIONS",
            payload:{
                items: data.items,
            },
        });
        } catch(error){
            console.log(error);
        }
    };

    const searchPost = (searchQuery) =>{
        dispatch({
        type:"SEARCH_QUERY",
        payload: searchQuery,
     });
    };

    
    useEffect(() =>{
        fetchApiData(`${API}intitle=${state.title}&${LAPI}`);
    },[state.title]);

    return (
         <AppContext.Provider value={{ ...state , searchPost }}>
        {children}
        </AppContext.Provider>
    );
    
};

const useGlobalContext = () => {
    return useContext(AppContext);

 };
export  {AppContext, AppProvider , useGlobalContext };

