/*React*/
import React from 'react'
import {connect} from 'react-redux';
/*Components*/
import NavMenu from "./NavMenu/NavMenu";

const NavMenuContainer = props => {
    return <div style={{marginBottom: "30px"}}><NavMenu/></div>
}

let mapStateToProps = (state) => {
    return {
        props: state
    }
}
export default connect(mapStateToProps,
    {}
)(NavMenuContainer)