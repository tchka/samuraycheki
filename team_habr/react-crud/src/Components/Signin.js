import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

export default function Signin() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
        <Button
            variant='info'
            style={{fontSize: '14px', fontWeight: '500'}}
            onClick={handleShow}>
                Регистрация
        </Button>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title> Вход </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId='fromBasicEmail'>
                        <Form.Label> Email </Form.Label>
                        <Form.Control type='email' placeholder='Введите Email' />
                    </Form.Group>
                    <Form.Group controlId="formBasicTextarea">
                        <Form.Label>Никнейм</Form.Label>
                        <Form.Control />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Пароль</Form.Label>
                        <Form.Control type='password' placeholder='Введите пароль' />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Пароль еще раз</Form.Label>
                        <Form.Control type='password' />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Я принимаю условия Пользовательского соглашения"/>
                    </Form.Group>

                    <Button variant="primary" type="submit" className='mb-5' size="lg" block>Зарегистрироваться</Button>

                    <Form.Text className='text-muted'>
                        Уже зарегистрированы? Войдите
                    </Form.Text>
                </Form>

            </Modal.Body>
        </Modal>
    </>
  );
}