'use client'
import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import './Login.css';
import Link from "next/link";

export default function Login() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event: any) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <main>
      <div className="header">
        <div className="logo">
          <img src="./pontualPay-logo.png" alt="Logo PontualPay" />
          <h3>PontualPay</h3>
        </div>
        <h2>Login</h2>
      </div>

      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Label>Email ou CPF</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Digite seu email ou CPF"
            />
            <Form.Control.Feedback type="invalid">
              Por favor, forneça um email ou CPF válido.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom02">
            <Form.Label>Senha</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Digite sua senha"
            />
            <Form.Control.Feedback type="invalid">
              Por favor, forneça uma senha.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <div className="buttons">
          <Button className="confirm" type="submit">Login</Button>
        </div>
      </Form>
      <Link href={"./CadastroUsuario"} className="register">
        <p>Não tem uma conta? Cadastre-se aqui</p>
      </Link>
    </main>
  );
}
