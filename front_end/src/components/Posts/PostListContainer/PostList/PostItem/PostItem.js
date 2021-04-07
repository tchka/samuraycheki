/*React*/
import React from 'react'
import {NavLink} from "react-router-dom";
/*Style*/
import s from './post_item.module.css'
/*Libraries*/
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
/*Components*/
import HashTags from "../../../../GlobalComponents/HashTags/HashTags";
/*Images*/
import avatar from '../../../../../assets/images/posts/18f6003fbeb9320f96a6b88a648c8589.jpg'
import post from '../../../../../assets/images/posts/d6263fdd508de91150aa7ab9fb758802.png'
import PostListSubMenu from "./PostListSubMenu/PostListSubMenu";


const PostItem = props => {
    let hashTag = ['hashTag1', 'hashTag2', 'hashTag3']
    let hashTags = hashTag.map(hashTag => <HashTags hashTag={hashTag}/>)
    return (
        <div className={s.container}>
            <Container>
                <Row>
                    <Col>
                        <div className={s.avatar}><img src={avatar} alt=""/></div>
                        <div className={s.item}><NavLink to={'/'}>nickName</NavLink></div>
                        <div className={s.item}><span>сегодня в 23:35</span></div>
                    </Col>
                </Row>
                <Row>
                    <h2 className={s.title}>
                        <NavLink to={'/'}>Python & оптимизация времени и памяти</NavLink>
                    </h2>
                </Row>
                <Row>
                    <Col>
                        {hashTags}
                    </Col>
                </Row>
                <Row>
                    <div className={s.container}>
                        <img className={s.post_img} src={post} alt=""/>
                    </div>
                </Row>
                <Row>
                    Зачастую скорость выполнения python оставляет желать лучшего. Некоторые отказываются от
                    использования python именно по этой причине, но существует несколько способов оптимизировать код
                    python как по времени, так и по используемой памяти.

                    Хотелось бы поделиться несколькими методами, которые помогают в реальных задачах.
                </Row>
                <Row>
                    <div className={s.title}>
                        <Button variant="outline-primary">Изучить статью</Button>{' '}
                    </div>
                </Row>
                <Row>
                    <PostListSubMenu/>
                </Row>
            </Container>

        </div>
    )
}
export default PostItem