/*React*/
import React from 'react'
import {connect} from 'react-redux';
import AuthForm from "./AuthForm/AuthForm";
/*Components*/


const AuthFormContainer = props => {
    return <AuthForm/>
}

let mapStateToProps = (state) => {
    return {
        props: state
    }
}
export default connect(mapStateToProps,
    {}
)(AuthFormContainer)