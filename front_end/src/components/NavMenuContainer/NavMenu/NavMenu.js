/*React*/
import React from 'react'
/*Libraries*/
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
/*style*/
import s from './nav_menu.module.css'

const NavMenu = props => {
    return (
        <Container>
            <Nav justify variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link href="/home">Direction 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Direction 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Direction 3</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-3">Direction 4</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-4">Direction 5</Nav.Link>
                </Nav.Item>
            </Nav>
        </Container>
    )
}

export default NavMenu