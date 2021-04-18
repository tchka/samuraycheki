import {bake_cookie} from "sfcookies";

import {authApi} from "../api/api";

const SET_IS_AUTH = 'SET_IS_AUTH'
const SET_ME = 'SET_ME'
const SET_MESSAGES = 'SET_MESSAGES'

let initialState = {
    isAuth: false,
    me: null,
    messages: null
};

const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_IS_AUTH: {
            return {
                ...state,
                isAuth: action.data
            };
        }
        case SET_ME: {
            return {
                ...state,
                me: action.data.me
            };
        }
        case SET_MESSAGES: {
            return {
                ...state,
                messages: action.data.me
            };
        }
        default:
            return state;
    }
}

export const setIsAuth = () => ({type:SET_IS_AUTH, data:true})
export const setMe = (me) => ({type:SET_ME, data:me})
export const setMessages = (messages) => ({type:SET_MESSAGES, data:messages})


export const userRegister = (email, username, password) => (dispatch) => {
    authApi.registerMe(email, username, password)
        .then(response => {
            if (response.status === 201) {
                dispatch(setMessages('Регистрация прошла успешно! Можете аторизоваться'))
            }
        })
}

export const userAuthMe = (userName, password) => (dispatch) => {
    authApi.authMe(userName, password)
        .then(response => {
            if (response.status === 200) {
                bake_cookie('Token', `Token ${response.data}`)
                dispatch(setIsAuth(true))
            }
        })
}

export const logoutMe = () => (dispatch) => {
    authApi.logoutMe()
        .then(response => {
            if (response.status === 201) {dispatch(setIsAuth(false))}
        })
}

export default userReducer