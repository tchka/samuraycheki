import React, { Component } from 'react'
import {Container} from "react-bootstrap";

import ArticleFull from '../Components/ArticleFull';
import ArticleDataService from "../services/article.service";

export default class Develop extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.getArticle = this.getArticle.bind(this);
    this.updatePublished = this.updatePublished.bind(this);
    this.updateArticle = this.updateArticle.bind(this);
    this.deleteArticle = this.deleteArticle.bind(this);

    this.state = {
      currentArticle: { },
      message: ""
    };
  }

  componentDidMount() {
    this.getArticle(this.props.match.params.slug);
  }

  onChangeTitle(e) {
    const title = e.target.value;

    this.setState(function(prevState) {
      return {
        currentArticle: {
          ...prevState.currentArticle,
          title: title
        }
      };
    });
  }

  onChangeDescription(e) {
    const description = e.target.value;

    this.setState(prevState => ({
      currentArticle: {
        ...prevState.currentArticle,
        description: description
      }
    }));
  }

  getArticle(slug) {
    ArticleDataService.get(slug)
      .then(response => {
        this.setState({
          currentArticle: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updatePublished(status) {
    var data = {
      id: this.state.currentArticle.id,
      title: this.state.currentArticle.title,
      description: this.state.currentArticle.description,
      published: status
    };

    ArticleDataService.update(this.state.currentArticle.id, data)
      .then(response => {
        this.setState(prevState => ({
          currentArticle: {
            ...prevState.currentArticle,
            published: status
          }
        }));
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updateArticle() {
    ArticleDataService.update(
      this.state.currentArticle.id,
      this.state.currentArticle
    )
      .then(response => {
        console.log(response.data);
        this.setState({
          message: "The tutorial was updated successfully!"
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  deleteArticle() {
    ArticleDataService.delete(this.state.currentArticle.id)
      .then(response => {
        console.log(response.data);
        this.props.history.push('/articles')
      })
      .catch(e => {
        console.log(e);
      });
  }

    render(){
        const { currentArticle } = this.state;
        const title = '';
        document.title = '{title}'.replace("{title}", title)
        return (
            <>
                <Container className="mt-4 mb-5">
                    <ArticleFull article={currentArticle} />
                </Container>
            </>
        )
    }
}
