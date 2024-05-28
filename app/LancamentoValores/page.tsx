'use client'
import React from "react";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import './LancamentoValores.css'
import Link from "next/link";

export default function LancamentoValores() {
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
        <h2>Lançamento de Valores</h2>
        <Link href={"./"} className="return">
          <span className="material-symbols-outlined">
            keyboard_return
          </span>
          <p>Voltar</p>
        </Link>
      </div>

      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="2" controlId="validationCustom01">
            <Form.Label>Número do Lançamento</Form.Label>
            <Form.Control
              required
              type="number"
              placeholder="Número do Lançamento"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="2" controlId="validationCustom02">
            <Form.Label>Empresa</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Empresa"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group><Form.Group as={Col} md="4" controlId="validationCustom03">
            <Form.Label>Tipo Lançamento</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Nome Fantasia"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3">
          <Form.Label>Tipo Gasto</Form.Label>
            <Form.Check
              required
              label="Gastro Fixo"
              feedback="You must agree before submitting."
              feedbackType="invalid"
            />
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom04">
            <Form.Label>Descrição</Form.Label>
            <Form.Control
              required
              as="textarea"
              placeholder="Descrição"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="2" controlId="validationCustom05">
            <Form.Label>Valor Total</Form.Label>
            <Form.Control
              className="mb-3"
              required
              type="number"
              placeholder="Valor Total"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="2" controlId="validationCustom06">
            <Form.Label>Tipo pagamento</Form.Label>
            <Form.Select defaultValue="">
              <option>Boleto</option>
              <option>Pix</option>
            </Form.Select>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="2" controlId="validationCustom07">
            <Form.Label>Vencimento</Form.Label>
            <Form.Control
              required
              type="date"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="1" controlId="validationCustom08">
            <Form.Label>Parcelas</Form.Label>
            <Form.Control
              required
              type="number"
              placeholder=""
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="1" controlId="validationCustom09">
            <Form.Label>Status</Form.Label>
            <Form.Check
              required
              label="Pago"
              feedback="You must agree before submitting."
              feedbackType="invalid"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="2" controlId="validationCustom10">
            <Form.Label>Data Lançamento</Form.Label>
            <Form.Control
              required
              type="date"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <div className="buttons">
          <Button className="confirm" type="submit">Confirmar</Button>
          <Button className="cancel" type="reset">Cancelar</Button>
        </div>
      </Form>
    </main>
  )
}
