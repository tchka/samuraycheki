import React, { useState } from 'react';
import { Modal, Form, Button} from 'react-bootstrap';

export default function Login() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
        <Button
            variant='outline-secondary'
            className="mr-2"
            style={{fontSize: '14px', fontWeight: '500'}}
            onClick={handleShow}>
                Войти
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
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Пароль</Form.Label>
                        <Form.Control type='password' placeholder='Введите пароль' />
                    </Form.Group>

                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Запомнить меня"/>
                    </Form.Group>

                    <Button variant="primary" type="submit" className='mb-5' size="lg" block>Войти</Button>

                    <Form.Text className='text-muted'>
                        Ещё нет аккаунта? Зарегистрируйтесь
                    </Form.Text>
                </Form>

            </Modal.Body>
        </Modal>
    </>
  );
}

