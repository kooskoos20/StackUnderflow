import * as actionTypes from './ActionTypes'

export function getNewestQuestions(){
    return(
        dispatch => {
        fetch('https://api.stackexchange.com/2.2/questions?pagesize=10&order=desc&sort=activity&site=stackoverflow')
        .then(res => res.text())
        .then(res => JSON.parse(res))
        .then(res => dispatch(action(actionTypes.GET_TOP_10_NEWEST,res.items)))
        }
    )
}


export function searchByQuery(query){
    return(
        dispatch => {
            fetch(`https://api.stackexchange.com/2.2/search/advanced?order=desc&sort=activity&body=${query}&title=${query}&site=stackoverflow`)
            .then(res => res.text())
            .then(res=>JSON.parse(res))
            .then(res=>{
                dispatch(action(actionTypes.SEARCH_BY_QUERY,res.items))
                dispatch(queryAction(actionTypes.UPDATE_CACHE,res.items,query))   
            })
        }
    )
}

export function getAnswerDetailsByQuestionId(id){
    return(
        dispatch => {
            fetch(`https://api.stackexchange.com/2.2/questions/${id}?order=desc&sort=activity&site=stackoverflow&filter=!-y(KwOdKR5Ga7mmruVArx2SJykc-M)3jKiDQBk1fq`)
            .then(res => res.text())
            .then(res=>JSON.parse(res))
            .then(res=>dispatch(action(actionTypes.GET_ANSWER_BY_QUESTION_ID,res.items)))   
        }
    )
}

export function getQuestionDetailsByQuestionId(id){
    return(
        dispatch => {
            fetch(`https://api.stackexchange.com/2.2/questions/${id}?order=desc&sort=activity&site=stackoverflow`)
            .then(res => res.text())
            .then(res=>JSON.parse(res))
            .then(res=>dispatch(action(actionTypes.GET_QUESTION_BY_QUESTION_ID,res.items)))   
        }
    )
}

export function checkCache(query){
    return(
        (dispatch,getState) => {
            let obj = getState().search.cache.filter(item => item[query]!==undefined);
            if(obj.length){
                dispatch(action(actionTypes.SEARCH_BY_QUERY,obj[0][query][0]))
                return true;
            }
            return false;
        }
    )
}

const action  = (type,payload) => ({
    type,
    payload
})

const queryAction = (type, payload, query)=> ({
    type,
    payload,
    query
})
