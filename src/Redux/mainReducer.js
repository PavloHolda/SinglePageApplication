
const initialValue = {
    news: [],
    currentNews: null
}

const mainReducer = (state = initialValue, action) => {
    switch(action.type) {
        case 'UPDATE_DATE' : 
            return {
                ...state,
                news: action.news
            }
        case 'SET_CURRENT_NEWS' :
            return {
                ...state,
                currentNews: action.currentNews
            }
        default :
            return state
    }
}

export default mainReducer;