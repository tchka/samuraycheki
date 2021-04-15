/*React*/
import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux';
/*Components*/
import PostList from "./PostList/PostList";
import {getAllArticles} from "../../../store/articleReducer";
import PostItem from "./PostList/PostItem/PostItem";


const PostListContainer = props => {
    const [articles, setArticles] = useState('')
    useEffect(() => {
        if (props.articles === null) {
            props.getAllArticles()
        }
        else if (props.articles !== null){
            setArticles(props.articles.results.map(article => <PostItem article={article}/>))
        }

    }, [props.articles])

    return <PostList articles={articles}/>
}

let mapStateToProps = (state) => {
    return {
        getAllArticles:getAllArticles,
        articles: state.articles.articles
    }
}
export default connect(mapStateToProps,
    {getAllArticles}
)(PostListContainer)