import React, { Component } from 'react'
import {Container, Row, Col} from "react-bootstrap";
import Article from '../Components/Article';
import Hablist from '../Components/Hablist';

export default class Develop extends Component {
    render(){
        const title = 'Разработка';
        document.title = 'Все публикации в разделе {title}'.replace("{title}", title)
        return (
            <>
                <Container>
                    <Row>
                        <Col md='8'>
                            <h3 className="mt-4 mb-5"
                                style={{
                                    fontFamily: '"Fira Sans",sans-serif',
                                    fontStyle: 'normal',
                                    fontWeight: '500',
                                    fontSize: '22px',
                                    color: '#5b666a',
                                }}
                            > {title} </h3>
                            <Article />
                            <Article />
                            <Article />
                            <Article />
                            <Article />
                            <Article />
                            <Article />
                            <Article />
                            <Article />
                            <Article />
                        </Col>
                        <Col md='4'>
                            <Hablist />
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}
