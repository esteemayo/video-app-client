import { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

const SignIn = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [passwordConfirm, setPasswordConfirm] = useState(null);

  return (
    <Container>
      <Wrapper>
        <Title>Sign in</Title>
        <SubTitle>to continue to YouTube</SubTitle>
        <Input
          type='text'
          placeholder='username'
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type='password'
          placeholder='password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button>Sign in</Button>
        <Title>or</Title>
        <Input
          type='text'
          placeholder='name'
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type='text'
          placeholder='username'
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type='email'
          placeholder='email'
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type='password'
          placeholder='password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          type='password'
          placeholder='confirm password'
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />
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
