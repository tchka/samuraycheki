/*React*/
import React from 'react'
/*Libraries*/
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
/*style*/
import s from './header.module.css'


const Header = () => {

    return (
        <div className={s.header}>
            <Container>
                <Row>
                    <Col xs={2}>Logo</Col>
                    <Col>
                        Header content Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Architecto asperiores laboriosam minus neque quos unde.
                    </Col>
                </Row>
            </Container>
        </div>
    )

}

export default Header