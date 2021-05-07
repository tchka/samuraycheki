import React, { Component } from 'react'
import {Container} from "react-bootstrap";

export default class Footer extends Component {
    render(){
        return (
            <Container fluid style={{ backgroundColor: '#212529', color: '#fff' }}>
                <Container style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
                    <p> © 2006 – 2021 Мой "Хабр" </p>
                </Container>
            </Container>
        )
    }
}
