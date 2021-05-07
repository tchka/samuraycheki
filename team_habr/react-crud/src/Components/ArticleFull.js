import React, { Component } from 'react';
import { ListGroup, Card } from 'react-bootstrap';
import moment from 'moment';

import img from '../Media/pic_small.jpg'
import img2 from '../Media/pic_big.jpeg'

export default class ArticleFull extends Component {
    render(){
        const data = moment(this.props.article.date_update).format("LLL")
        const author = this.props.article.author
        const title = this.props.article.title
        const tags = this.props.article.tags
        const text = this.props.article.text
        const slug = this.props.article.slug
        const poster = this.props.article.poster
        return (
            <>
                <Card className="text-left mb-5">
                    <Card.Header>
                        <img src={img} alt='' width="24" height="24" className="mr-1" />
                        <div style={{display: 'inline-block', color: '#548eaa'}} className="mr-2">{author}</div>
                        <div style={{display: 'inline-block'}}>{data}</div>
                    </Card.Header>
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
                    </Card.Body>
                    <Card.Img variant="top" src={poster} />
                    <Card.Body>
                        <Card.Text>
                           {text}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted">Лайки +52</Card.Footer>
                </Card>
                <h2 className="mb-4"> Комментарии </h2>
                <Card className="text-left mb-5">
                    <Card.Header>
                        <img src={img} alt='' width="24" height="24" className="mr-1" />
                        <div style={{display: 'inline-block', color: '#548eaa'}} className="mr-2">Bright_Translate</div>
                        <div style={{display: 'inline-block'}}>вчера в 16:00</div>
                    </Card.Header>
                    <Card.Body>
                       <Card.Text>
                          Мой комментарий тут
                       </Card.Text>
                       <Card>
                            <Card.Header>
                                <img src={img} alt='' width="24" height="24" className="mr-1" />
                                <div style={{display: 'inline-block', color: '#548eaa'}} className="mr-2">Bright_Translate</div>
                                <div style={{display: 'inline-block'}}>вчера в 16:00</div>
                            </Card.Header>
                            <Card.Body>
                               <Card.Text>
                                 А мой комментарий тут
                               </Card.Text>
                            </Card.Body>
                       </Card>
                    </Card.Body>
                </Card>

            </>
        )
    }
}

