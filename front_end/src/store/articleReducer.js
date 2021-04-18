import {articlesApi} from "../api/api";

const SET_ALL_ARTICLES = 'SET_ALL_ARTICLES'
const SET_CATEGORY = 'SET_CATEGORY'

let initialState = {
    articles: null,
    category: null
};

const articleReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_ALL_ARTICLES: {
            return {
                ...state,
                articles: action.data
            };
        }
        case SET_CATEGORY: {
            return {
                ...state,
                category: action.data
            };
        }
        default:
            return state;
    }
}

export const setAllCategory = (category) => ({type:SET_CATEGORY, data:category})
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