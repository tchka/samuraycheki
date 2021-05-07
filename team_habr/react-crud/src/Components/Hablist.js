import React, { Component } from 'react';
import { ListGroup, Card } from 'react-bootstrap';

import img from '../Media/pic_small.jpg'

export default class Hablist extends Component {
    render(){
        const list_item = (
            <ListGroup.Item className='mb-1'>
                <div style={{display: "flex", flex: '0 1 auto'}}>
                    <div style={{display: 'block', flex: 'none'}}>
                        <img src={img} alt="" width="36" height="36" style={{borderRadius: '3px'} } />
                    </div>
                    <div style={{marginLeft: '12px', position: 'relative', flex: '0 1 auto', width: '100%'}}>
                        <span style={{display: 'inline-block', width: '100%', color: '#5e6973',
                                verticalAlign: 'top', fontWeight: '700', fontSize: '13px',
                                fontFamily: '"-apple-system",BlinkMacSystemFont,"Segoe UI",Arial,sans-serif',
                                lineHeight: '20px', webkitFontSmoothing: 'antialiased'}}>
                            Программирование</span>
                        <div style={{marginTop: '6px', color: '#82a3b1', lineHeight: '14px'}}>
                            <span style={{color: 'inherit', fontWeight: '700', fontSize: '12px',
                                    fontFamily: '"-apple-system",BlinkMacSystemFont,"Segoe UI",Arial,sans-serif',
                                    textDecoration: 'none'}}>
                                5,1k авторов</span>,
                            <span style={{color: 'inherit', fontWeight: '700', fontSize: '12px',
                                    fontFamily: '"-apple-system",BlinkMacSystemFont,"Segoe UI",Arial,sans-serif',
                                    textDecoration: 'none'}}>
                                13,3k публикаций</span>
                        </div>
                    </div>
                </div>
            </ListGroup.Item>
        )
        return (
            <>
                <Card className='mt-5'>
                    <h5 className='text-left mt-2 ml-2'> Хабы </h5>
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

