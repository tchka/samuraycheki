import React, { Component } from 'react';
import { Navbar, Nav, Container} from 'react-bootstrap';
import {Link} from "react-router-dom";
import styled from "styled-components";

const Styles = styled.div`
    a, .navbar-brand, .navbar-nav .nav-link {
        color: #FFFFFF;
        text-decoration: none;
        &:hover {
            color: #ffff99;
        }
    }
`
const Styles2 = styled.div`
    a, .navbar-brand {
        color: #ffff99;
        text-decoration: none;
        &:hover {
            color: #ffffff;
        }
    }
`

export default class Header extends Component {
    render(){
        return (
          <>
          <Styles>
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        Мой "Хабр" |
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link style={{
                                                border: '1px solid #6e767c',
                                                borderRadius: '3px',
                                                letterSpacing: '.2px',
                                                fontSize: '12px'
                                            }}>
                                <Link to="/start"> КАК СТАТЬ АВТОРОМ </Link>
                            </Nav.Link>
                        </Nav>
                        <Styles2>
                            <Nav className="ml-auto">
                                <Nav.Link style={{
                                                    letterSpacing: '.2px',
                                                    fontSize: '13px'
                                                }}>
                                    <Link to="/start"> Тут может быть реклама Вашей статьи </Link>
                                </Nav.Link>
                            </Nav>
                        </Styles2>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
          </Styles>
          </>
        )
    }
}

