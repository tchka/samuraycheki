import React, { Component } from 'react'
import {Container} from "react-bootstrap";


export default class Start extends Component {
    render(){
        document.title = 'Самое важное в проекте'
        return (
            <>
                <Container style={{paddingTop: '2rem', paddingBottom: '2rem'}}>
                    <h1> Page "Start" </h1>
                </Container>
            </>
        )
    }
}
