/*React*/
import React, {useState} from 'react'
import {connect} from 'react-redux';
/*Thunk*/
import {userAuthMe} from "../../../store/userReducer";
/*Components*/
import AuthForm from "./AuthForm/AuthForm";

const AuthFormContainer = props => {
    const [authForm, setAuthForm] = useState({login:'', password:''})
    const authMe = (form) => {props.userAuthMe(form.login, form.password)}
    return <AuthForm
        setAuthForm={setAuthForm} authForm={authForm} authMe={authMe} handleCloseAuth={props.handleCloseAuth}
    />
}

let mapStateToProps = (state) => {
    return {
        auth: state.auth,
        userAuthMe:userAuthMe
    }
}
export default connect(mapStateToProps,
    {userAuthMe}
)(AuthFormContainer)