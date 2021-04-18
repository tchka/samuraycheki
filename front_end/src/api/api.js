import * as axios from "axios";
import {read_cookie} from "sfcookies";

/*
let headers = {headers: {
    Authorization: (read_cookie('Token'))
}
}*/

const BASE_URL = 'http://127.0.0.1:8000/api/'/*Место для базового УРЛ проекта*/
const ARTICLES = 'articles/'
const CATEGORY = 'category/'
const AUTH = 'auth/'
const TOKEN = 'token/'
const LOGIN = 'login/'
const LOGOUT = 'logout/'
const USERS = 'users/'
const ME = 'me/'

export const articlesApi = {
    getArticlesList() {
        return axios.get(`${BASE_URL}${ARTICLES}`, {headers: {Authorization: (read_cookie('Token'))}}
        )
    },
    getCategoriesList() {
        return axios.get(`${BASE_URL}${CATEGORY}`, {headers: {Authorization: (read_cookie('Token'))}})

    }
}

export const authApi = {
    authMe(userName, password) {
        return axios.post(`${BASE_URL}${AUTH}${TOKEN}${LOGIN}`, {'password':password, 'username':userName})
    },
    getMe() {
        return axios.get(`${BASE_URL}${AUTH}${USERS}${ME}`, {headers: {Authorization: (read_cookie('Token'))}})
    },
    registerMe(email, username, password){
        return axios.post(`${BASE_URL}${AUTH}${USERS}`,
            {"email": email, "username": username, "password": password})
    },
    logoutMe() {
        return axios.post(`${BASE_URL}${AUTH}${TOKEN}${LOGOUT}`,
        {headers: {Authorization: (read_cookie('Token'))}},{})
    }
}