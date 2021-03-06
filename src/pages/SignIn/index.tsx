import React from 'react';

import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import logoImg from '../../assets/over-the-air-new2.png';

import Input from '../../components/Input/index';
import Button from '../../components/Button/index';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="Over The Air" style={{ width: '40%' }} />
      <form>
        <h1>Faça seu Logon</h1>

        <Input name="email" icon={FiMail} placeholder="E-mail" />

        <Input
          name="password"
          icon={FiLock}
          type="password"
          placeholder="Senha"
        />

        <Button type="submit">Entrar</Button>

        <a href="forgot">Esqueci minha senha</a>
      </form>

      <a href="teste">
        <FiLogIn />
        Criar conta
      </a>
    </Content>
    <Background />
  </Container>
);

export default SignIn;
