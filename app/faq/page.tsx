'use client'
import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import './faq.css';
import Link from "next/link";

export default function FAQ() {
  return (
    <main>
      <div className="header">
        <div className="logo">
          <img src="./pontualPay-logo.png" alt="Logo PontualPay" />
          <h3>PontualPay</h3>
        </div>
        <h2>FAQ</h2>
      </div>

      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Como posso redefinir minha senha?</Accordion.Header>
          <Accordion.Body>
            Para redefinir sua senha, vá para a página de login e clique em "Esqueceu sua senha?". Siga as instruções para receber um link de redefinição de senha em seu email.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Como visualizar minhas transações financeiras?</Accordion.Header>
          <Accordion.Body>
            Para visualizar suas transações financeiras, acesse a seção "Transações" no painel do usuário. Você poderá ver todas as transações recentes e filtrá-las por data.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>O que fazer se eu detectar uma transação suspeita?</Accordion.Header>
          <Accordion.Body>
            Se você detectar uma transação suspeita, entre em contato imediatamente com o suporte ao cliente. Você pode fazer isso pelo chat ao vivo no site ou enviando um email para suporte@pontualpay.com.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Como posso atualizar minhas informações de perfil?</Accordion.Header>
          <Accordion.Body>
            Para atualizar suas informações de perfil, vá para a seção "Perfil" no painel do usuário e clique em "Editar Perfil". Faça as alterações necessárias e salve.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </main>
  );
}
