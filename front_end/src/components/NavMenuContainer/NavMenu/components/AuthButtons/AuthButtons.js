/*React*/
import React, {useState} from 'react'
/*Libraries*/
import {Modal} from "react-bootstrap";
import Button from "react-bootstrap/Button";
/*style*/
import { flexContainer } from "../../../../../globalStyles/glodalStyles";
/*components*/
import RegisterForm from "../../../../GlobalComponents/Auth/RegisterForm/RegisterForm";
import AuthFormContainer from "../../../../GlobalComponents/Auth/AuthFormContainer";



const AuthButtons = props => {

    const [showAuth, setShowAuth] = useState(false);
    const [showRegister, setRegister] = useState(false);
    const handleCloseAuth = () => setShowAuth(false);
    const handleShowAuth = () => setShowAuth(true);
    const handleCloseRegister = () => setRegister(false);
    const handleShowRegister = () => setRegister(true);
    return (
        <div style={flexContainer}>
            <Button variant="outline-primary" onClick={handleShowAuth}>Войти</Button>
            <Button variant="primary" onClick={handleShowRegister}>Регистрация</Button>
            <>
                <Modal show={showAuth} onHide={handleCloseAuth}>
                    <Modal.Header closeButton>
                        <Modal.Title>Авторизация</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <AuthFormContainer handleCloseAuth={handleCloseAuth}/>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseAuth}>
                            Закрыть
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Modal show={showRegister} onHide={handleCloseRegister}>
                    <Modal.Header closeButton>
                        <Modal.Title>Регистрация</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <RegisterForm/>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseRegister}>
                            Закрыть
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        </div>
    )
}

export default AuthButtons
