'use client'
import React from "react";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import './CadastroEmpresa.css'
import Link from "next/link";

export default function CadastroEmpresa() {
  return (
    <main>
      <div className="header">
        <div className="logo">
          <img src="./pontualPay-logo.png" alt="" />
          <h3>PantualPay</h3>
        </div>
        <h2>Cadastro de Empresa</h2>
        <Link href={"./"} className="return">
          <span className="material-symbols-outlined">
            keyboard_return
          </span>
          <p>Voltar</p>
        </Link>
      </div>

      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} md="2" controlId="validationCustom01">
            <Form.Label>CNPJ</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="CNPJ"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Razão Social</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Razão Social"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group><Form.Group as={Col} md="4" controlId="validationCustom03">
            <Form.Label>Nome Fantasia</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Nome Fantasia"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="2" controlId="validationCustom04">
            <Form.Label>Inscrição Municipal</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Inscrição Municipal"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="2" controlId="validationCustom05">
            <Form.Label>Inscrição Estadual</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Inscrição Estadual"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="2" controlId="validationCustom06">
            <Form.Label>Data Abertura</Form.Label>
            <Form.Control
              required
              type="date"
              placeholder="Data Abertura"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustomUsername">
            <Form.Label>Username</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Username"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Form.Group as={Col} md="2" controlId="validationCustom07">
            <Form.Label>Telefone</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Telefone"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="2" controlId="validationCustom08">
            <Form.Label>Data Cadastro</Form.Label>
            <Form.Control
              required
              type="date"
              placeholder="Razão Social"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="1" controlId="validationCustom09">
            <Form.Label>CEP</Form.Label>
            <Form.Control type="text" placeholder="CEP" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom10">
            <Form.Label>Logradouro</Form.Label>
            <Form.Control type="text" placeholder="Logradouro" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom11">
            <Form.Label>Cidade</Form.Label>
            <Form.Control type="text" placeholder="Cidade" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid zip.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="2" controlId="validationCustom12">
            <Form.Label>Estado</Form.Label>
            <Form.Control type="text" placeholder="Estado" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid zip.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="2" controlId="validationCustom13">
            <Form.Label>Pais</Form.Label>
            <Form.Control type="text" placeholder="Pais" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid zip.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom14">
            <Form.Label>Complemento</Form.Label>
            <Form.Control type="text" placeholder="Complemento" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid zip.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="1" controlId="validationCustom15">
            <Form.Label>Numero</Form.Label>
            <Form.Control type="number" placeholder="Numero" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid zip.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <div className="buttons">
          <Button className="confirm" type="submit">Confirmar</Button>
          <Button className="cancel" type="reset">Cancelar</Button>
          <Button className="confirm" type="reset">Alterar</Button>
          <Button className="cancel" type="reset">Excluir</Button>
        </div>
      </Form>
    </main>
  )
}
