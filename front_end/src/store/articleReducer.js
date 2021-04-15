import {articlesApi} from "../api/api";

const SET_ALL_ARTICLES = 'SET_ALL_ARTICLES'

let initialState = {
    articles: null
};

const articleReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_ALL_ARTICLES: {
            return {
                ...state,
                articles: action.data
            };
        }
        default:
            return state;
    }
}

export const setAllArticles = (articles) => ({type:SET_ALL_ARTICLES, data:articles})

export const getAllArticles = () => (dispatch) => {
    articlesApi.getArticlesList()
        .then(response => {
            if (response.status === 200) {
                dispatch(setAllArticles(response.data))
            }
        })
}


export default articleReducer