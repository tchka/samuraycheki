import React, { Component } from 'react';
import { ListGroup, Card, Button } from 'react-bootstrap';
import moment from 'moment';

import img from '../Media/pic_small.jpg'
import img2 from '../Media/pic_big.jpeg'

export default class Article extends Component {
    onclick (slug) {
        window.location.assign('/articles/' + slug);
    }
    render(){
        const data = moment(this.props.article.date_update).format("LLL")
        const title = this.props.article.title
        const tags = this.props.article.tags
        const short_desc = this.props.article.short_desc
        const slug = this.props.article.slug
        const poster = this.props.article.poster
        return (
            <>
                <Card className="text-left mb-5">
                    <Card.Header>
                        <img src={img} alt='' width="24" height="24" className="mr-1" />
                        <div style={{display: 'inline-block', color: '#548eaa'}} className="mr-2">{this.props.article.author}</div>
                        <div style={{display: 'inline-block'}}>
                            {data}
                        </div>
                    </Card.Header>
                    <Card.Img variant="top" src={poster} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <ListGroup horizontal='sm'
                            style={{color: '#5e6973', fontSize: '13px'}}
                            className='mb-2'
                        >
                            {tags && tags.map((tag) => (
                                <ListGroup.Item>
                                  {tag}
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                        <Card.Text>
                          {short_desc}
                        </Card.Text>
                        <Button variant="outline-info" onClick={() => this.onclick(slug)}> Читать дальше -> </Button>
                    </Card.Body>
                    <Card.Footer className="text-muted">Лайки +52</Card.Footer>
                </Card>

            </>
        )
    }
}

