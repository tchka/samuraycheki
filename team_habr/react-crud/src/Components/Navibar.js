import React, { Component } from 'react';
import { Navbar, Nav, Container} from 'react-bootstrap';
import styled from "styled-components";

import Login from './Login'
import Signin from './Signin'


const Styles = styled.div`
    a, .navbar-brand, .navbar-nav .nav-link {
        font-weight: 500;
        font-size: 14px;
        font-family: "-apple-system",BlinkMacSystemFont,"Segoe UI",Arial,sans-serif;
        text-decoration: none;
        color: #909090;
        &:hover {
            color: #548eaa;
        }
    }
`


export default class Navibar extends Component {
    render(){
        /* props приходит из App.js блогодаре обертке класса Navibar в withRouter*/
        const { location } = this.props;

        return (
          <>
          <Styles>
            <Navbar collapseOnSelect expand="md" bg="light" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto" activeKey={location.pathname}>
                            <Nav.Link href="/" > Все потоки </Nav.Link>
                            <Nav.Link href="/develop"> Разработка </Nav.Link>
                            <Nav.Link href="/admin"> Администрирование </Nav.Link>
                            <Nav.Link href="/design"> Дизайн </Nav.Link>
                            <Nav.Link href="/management"> Менеджмент </Nav.Link>
                            <Nav.Link href="/marketing"> Маркетинг </Nav.Link>
                            <Nav.Link href="/popsci"> Научпоп </Nav.Link>
                         </Nav>
                         <Nav><Login /></Nav>
                         <Nav><Signin /></Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
          </Styles>
          </>
        )
    }
}

