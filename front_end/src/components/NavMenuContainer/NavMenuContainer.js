/*React*/
import React from 'react'
import {connect} from 'react-redux';
/*Components*/
import NavMenu from "./NavMenu/NavMenu";

const NavMenuContainer = props => {
    return <NavMenu/>
}

let mapStateToProps = (state) => {
    return {
        props: state
    }
}
export default connect(mapStateToProps,
    {}
)(NavMenuContainer)