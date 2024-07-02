'use client'
import React from "react";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import './CadastroUsuario.css'
import Link from "next/link";

export default function CadastroUsuario() {
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
          <img src="./pontualPay-logo.png" alt="" />
          <h3>PantualPay</h3>
        </div>
        <h2>Cadastro de Usuário</h2>
        <Link href={"./"} className="return">
          <span className="material-symbols-outlined">
            keyboard_return
          </span>
          <p>Voltar</p>
        </Link>
      </div>

      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>CPF</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Digite seu CPF"
            />
            <Form.Control.Feedback type="invalid">
              Por favor, forneça um CPF válido.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="8" controlId="validationCustom02">
            <Form.Label>Nome Completo</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Digite seu nome completo"
            />
            <Form.Control.Feedback type="invalid">
              Por favor, forneça um nome válido.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom03">
            <Form.Label>RG</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Digite seu RG"
            />
            <Form.Control.Feedback type="invalid">
              Por favor, forneça um RG válido.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom04">
            <Form.Label>Sexo</Form.Label>
            <Form.Select aria-label="Selecione o Sexo" required>
              <option value="">Selecione...</option>
              <option value="masculino">Masculino</option>
              <option value="feminino">Feminino</option>
              <option value="outro">Outro</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Por favor, selecione o sexo.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom05">
            <Form.Label>Estado Civil</Form.Label>
            <Form.Select aria-label="Selecione o Estado Civil" required>
              <option value="">Selecione...</option>
              <option value="solteiro">Solteiro(a)</option>
              <option value="casado">Casado(a)</option>
              <option value="divorciado">Divorciado(a)</option>
              <option value="viuvo">Viúvo(a)</option>
              <option value="outro">Outro</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Por favor, selecione o estado civil.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom06">
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
          <Form.Group as={Col} md="6" controlId="validationCustom07">
            <Form.Label>Confirmação de Senha</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Confirme sua senha"
            />
            <Form.Control.Feedback type="invalid">
              As senhas não conferem.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <div className="buttons">
          <Button className="confirm" type="submit">Confirmar</Button>
          <Button className="cancel" type="reset">Cancelar</Button>
        </div>
      </Form>
    </main>
  );
}