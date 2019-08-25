import * as types from '../actions/ActionTypes'

const initialState = {}

const SearchReducer = (state = initialState, action) => {
    if(action.type === types.GET_TOP_10_NEWEST){
        return{...state,questions: action.payload}
    }

    if(action.type === types.SEARCH_BY_QUERY){
        return {...state,queryResults:action.payload}
    }
    
    if(action.type === types.GET_ANSWER_BY_QUESTION_ID){
        return {...state,answer:action.payload}
    }
    
    if(action.type === types.GET_QUESTION_BY_QUESTION_ID){
        return {...state,question:action.payload}
    }

    if(action.type === types.UPDATE_CACHE){
        let updatedCache = state.cache ? state.cache : []
        if(updatedCache.length>=5)
            updatedCache.shift()
        updatedCache[updatedCache.length] = {[action.query]:[action.payload]}
        return {...state,cache:updatedCache}
    }

    return state;
}

export default SearchReducer;