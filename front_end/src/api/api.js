import * as axios from "axios";
import {read_cookie} from "sfcookies";

/*
let headers = {headers: {
    Authorization: (read_cookie('Token'))
}
}*/

const BASE_URL = 'http://127.0.0.1:8000/api/'/*Место для базового УРЛ проекта*/
const ARTICLES = 'articles/'

export const authApi = {

}

export const articlesApi = {
    getArticlesList() {
        return axios.get(`${BASE_URL}${ARTICLES}`)
    }
}