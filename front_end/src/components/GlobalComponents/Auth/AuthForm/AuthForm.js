/*React*/
import React from 'react'
/*Libraries*/
import {Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";

const AuthForm = props => {

    return (
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email адрес</Form.Label>
                <Form.Control type="email" placeholder="Введите email" />
                <Form.Text className="text-muted">
                    Мы никогда не будем делиться вашей электронной почтой с кем-либо еще.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Пароль</Form.Label>
                <Form.Control type="password" placeholder="Пароль" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Войти
            </Button>
        </Form>
    )
}

export default AuthForm
