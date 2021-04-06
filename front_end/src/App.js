/*React*/
import React from 'react'
/*Libraries*/
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
/*Components*/
import Header from "./components/Header/Header";
import NavMenuContainer from "./components/NavMenuContainer/NavMenuContainer";
import PostListContainer from "./components/Posts/PostListContainer/PostListContainer";
import Footer from "./components/Footer/Footer";


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
                        <NavMenuContainer/>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col sm={8}>
                        <PostListContainer/>
                    </Col>
                    <Col sm={4}>{/*Место для популярных статей*/}
                        <div style={{marginBottom: '30px'}}>
                            Сдесь будут популярные статьи а пока текст рыба
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab commodi deserunt dolor
                            doloribus earum eos est fuga, nostrum omnis optio perferendis porro quae
                            quibusdam quo quod, sapiente temporibus voluptatum. Quia.
                        </div>
                        <div style={{marginBottom: '30px'}}>
                            Сдесь будут популярные статьи а пока текст рыба
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab commodi deserunt dolor
                            doloribus earum eos est fuga, nostrum omnis optio perferendis porro quae
                            quibusdam quo quod, sapiente temporibus voluptatum. Quia.
                        </div>
                        <div style={{marginBottom: '30px'}}>
                            Сдесь будут популярные статьи а пока текст рыба
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab commodi deserunt dolor
                            doloribus earum eos est fuga, nostrum omnis optio perferendis porro quae
                            quibusdam quo quod, sapiente temporibus voluptatum. Quia.
                        </div>
                        <div style={{marginBottom: '30px'}}>
                            Сдесь будут популярные статьи а пока текст рыба
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab commodi deserunt dolor
                            doloribus earum eos est fuga, nostrum omnis optio perferendis porro quae
                            quibusdam quo quod, sapiente temporibus voluptatum. Quia.
                        </div>
                    </Col>

                </Row>
            </Container>
            <Container fluid={true}>
                <Row>
                    <Col>
                        <Footer/>
                    </Col>
                </Row>
            </Container>
        </div>
    </>;
    return div;
}

export default App;
