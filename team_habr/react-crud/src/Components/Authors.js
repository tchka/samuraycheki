import React, { Component } from 'react';
import { ListGroup, Card } from 'react-bootstrap';

import img from '../Media/pic_small.jpg'

export default class Authors extends Component {
    render(){
        const list_item = (
            <ListGroup.Item className='mb-1'>
                <img src={img} width="24" alt=''
                    style={{
                    borderRadius: '3px',
                    maxWidth: '32px'
                    }}
                    className="mr-1" />
                <div style={{display: 'inline-block',
                            color: '#444',
                            fontSize: '13px',
                            fontWeight: '500',
                            marginLeft: '8px'
                      }}
                    className="mr-2">
                    Bright_Translate
                </div>
                <div style={{display: 'inline-block',
                            color:'#cd66cd',
                            fontSize: '12px',
                            fontWeight: '700',
                            float: 'right'
                      }}>
                    102 </div>
            </ListGroup.Item>
        )
        return (
            <>
                <Card className='mt-5'>
                    <h5 className='text-left mt-2 ml-2'> Вклад авторов </h5>
                    <ListGroup variant='flush'>
                        {list_item}
                        {list_item}
                        {list_item}
                        {list_item}
                        {list_item}
                        {list_item}
                        {list_item}
                        {list_item}
                        {list_item}
                        {list_item}
                    </ListGroup>
                </Card>

            </>
        )
    }
}

