import styled from 'styled-components';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';

import { auth, provider } from '../firebase';
import { googleSignIn, loginUser, reset } from 'features/user/userSlice';

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isSuccess, isError } = useSelector(((state) => ({ ...state.user })));

  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [passwordConfirm, setPasswordConfirm] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    const credentials = {
      username,
      password,
    };

    dispatch(loginUser({ credentials, toast }));
  };

  const signInWithGoogle = async () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        const credentials = {
          name: result.user.displayName,
          username: result.user.displayName.split(' ')[0],
          email: result.user.email,
          img: result.user.photoURL,
        };

        dispatch(googleSignIn({ credentials, toast }));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    user && isSuccess && navigate('/');
    isError && toast.error(isError);
    dispatch(reset());
  }, [user, isError, isSuccess, navigate, dispatch]);

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
        <Button onClick={handleLogin}>Sign in</Button>
        <Title>or</Title>
        <Button onClick={signInWithGoogle}>Signin with Google</Button>
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
