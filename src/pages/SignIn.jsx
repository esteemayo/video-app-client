import { useState } from 'react';
import styled from 'styled-components';

const SignIn = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Sign in</Title>
        <SubTitle>to continue to YouTube</SubTitle>
        <Input placeholder='username' />
        <Input type='password' placeholder='password' />
        <Button>Sign in</Button>
        <Title>or</Title>
        <Input placeholder='username' />
        <Input placeholder='email' />
        <Input type='password' placeholder='password' />
        <Button>Sign up</Button>
      </Wrapper>
      <More>
        English(USA)
        <Links>
          <Link>Help</Link>
          <Link>Privacy</Link>
          <Link>Terms</Link>
        </Links>
      </More>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 5.6rem);
  color: ${({ theme }) => theme.text};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bgLighter};
  border: 1px solid ${({ theme }) => theme.soft};
  padding: 2rem 5rem;
  gap: 1rem;
`;

const Title = styled.h1`
  font-size: 2.4rem;
`;

const SubTitle = styled.h2`
  font-weight: 300;
  font-size: 2remx;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  font-family: inherit;
  border: 1px solid ${({ theme }) => theme.soft};
  border-radius: 0.3rem;
  background-color: transparent;
  outline-color: #555;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.button`
  border: none;
  display: inline-block;
  font-weight: 500;
  padding: 1rem 2rem;
  border-radius: 0.3rem;
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.textSoft};
  outline-color: #555;
  cursor: pointer;
`;

const More = styled.div`
  display: flex;
  margin-top: 1rem;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.textSoft};
`;

const Links = styled.div`
  margin-left: 5rem;
`;

const Link = styled.span`
  margin-left: 3rem;
`;

export default SignIn;
