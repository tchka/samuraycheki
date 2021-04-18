/*React*/
import React from 'react'
/*Libraries*/
import {Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";

const AuthForm = props => {
    return (
        <Form>
            <Form.Group >
                <Form.Label>Nickname</Form.Label>
                <Form.Control placeholder="Введите nickname"
                onChange={event => props.setAuthForm({...props.authForm, login: event.target.value})}
                />
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Пароль</Form.Label>
                <Form.Control
                    type="password" placeholder="Пароль"
                    onChange={event => props.setAuthForm({...props.authForm, password: event.target.value})}
                />
            </Form.Group>
            <Button variant="primary" onClick={event => {
                props.authMe(props.authForm)
                props.handleCloseAuth()
            }}>
                Войти
            </Button>
        </Form>
    )
}

export default AuthForm
