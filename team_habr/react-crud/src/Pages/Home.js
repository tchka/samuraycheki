import React, { Component } from 'react'
import {Container, Row, Col} from "react-bootstrap";
import Article from '../Components/Article';
import Authors from '../Components/Authors';
import ArticleDataService from "../services/article.service";
import { Link } from "react-router-dom";
import { ListGroup, Card, Button } from 'react-bootstrap';

import img from '../Media/pic_small.jpg'
import img2 from '../Media/pic_big.jpeg'

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.retrieveArticles = this.retrieveArticles.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveTutorial = this.setActiveTutorial.bind(this);
    this.removeAllArticles = this.removeAllArticles.bind(this);
    this.searchTitle = this.searchTitle.bind(this);

    this.state = {
      articles: [],
      currentArticle: null,
      currentIndex: -1,
      searchTitle: ""
    };
  }

  componentDidMount() {
    this.retrieveArticles();
  }

  onChangeSearchTitle(e) {
    const searchTitle = e.target.value;

    this.setState({
      searchTitle: searchTitle
    });
  }

  retrieveArticles() {
    ArticleDataService.getAll()
      .then(response => {
        this.setState({
          articles: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveArticles();
    this.setState({
      currentTutorial: null,
      currentIndex: -1
    });
  }

  setActiveTutorial(article, index) {
    this.setState({
      currentTutorial: article,
      currentIndex: index
    });
  }

  removeAllArticles() {
    ArticleDataService.deleteAll()
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }

  searchTitle() {
    ArticleDataService.findByTitle(this.state.searchTitle)
      .then(response => {
        this.setState({
          articles: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }


    render(){
        const { searchTitle, articles, currentArticle, currentIndex } = this.state;

        document.title = 'Публикации за сутки'
        return (
            <>
                <Container>
                    <Row>
                        <Col md='9'>
                            <h3 className="mt-4 mb-5"
                                style={{
                                    fontFamily: '"Fira Sans",sans-serif',
                                    fontStyle: 'normal',
                                    fontWeight: '500',
                                    fontSize: '22px',
                                    color: '#5b666a',
                                }}
                            > Все потоки </h3>
                            {articles &&
                              articles.map((article) => (
                                <Article article={article} />

                              ))}
                        </Col>
                        <Col md='3'>
                            <Authors />
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}
