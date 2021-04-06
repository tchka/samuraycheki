/*React*/
import React from 'react'
/*Libraries*/
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
/*Components*/
import Header from "./components/Header/Header";


const App = () => {
    let div = <>
        <div className="App">
            <Container fluid={true}>
                <Row>
                    <Col>
                        <Header/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {/*Сдесь будет навигация*/}
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolorum impedit
                        inventore ipsum officia perferendis similique sunt vero? Autem consectetur corporis dolore
                        doloremque ipsum laudantium nemo saepe sunt tempore vitae?
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col sm={8}>{/*Сдесь контент*/}
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab commodi deserunt dolor
                        doloribus earum eos est fuga, nostrum omnis optio perferendis porro quae
                        quibusdam quo quod, sapiente temporibus voluptatum. Quia.
                    </Col>
                    <Col sm={4}>{/*Место для популярных статей*/}
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab commodi deserunt dolor
                        doloribus earum eos est fuga, nostrum omnis optio perferendis porro quae
                        quibusdam quo quod, sapiente temporibus voluptatum. Quia.
                    </Col>
                </Row>
            </Container>
            <Container fluid={true}>
                <Row>
                    <Col>
                        {/*footer*/}
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab commodi deserunt dolor
                        doloribus earum eos est fuga, nostrum omnis optio perferendis porro quae
                        quibusdam quo quod, sapiente temporibus voluptatum. Quia.
                    </Col>
                </Row>
            </Container>
        </div>
    </>;
    return div;
}

export default App;
