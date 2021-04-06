/*React*/
import React from 'react'
import {connect} from 'react-redux';
/*Components*/
import PostList from "./PostList/PostList";


const PostListContainer = props => {
    return <PostList/>
}

let mapStateToProps = (state) => {
    return {
        props: state
    }
}
export default connect(mapStateToProps,
    {}
)(PostListContainer)