import styled from 'styled-components';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithPopup } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';

import app from '../firebase';
import { auth, provider } from '../firebase';
import { googleSignIn, loginUser, registerUser, reset } from 'features/user/userSlice';

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isSuccess, isError } = useSelector(((state) => ({ ...state.user })));

  const [perc, setPerc] = useState(100);
  const [file, setFile] = useState(null);
  const [inputs, setInputs] = useState(null);
  // const [name, setName] = useState(null);
  // const [email, setEmail] = useState(null);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  // const [passwordConfirm, setPasswordConfirm] = useState(null);

  const handleChange = ({ target: input }) => {
    const { name, value } = input;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

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
        const credentials = {
          name: result.user.displayName,
          username: result.user.displayName.split(' ')[0].toLowerCase(),
          email: result.user.email,
          img: result.user.photoURL,
        };

        dispatch(googleSignIn({ credentials, toast }));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const uploadFile = (file) => {
    const fileName = `${Date.now()}-${file.name}`;

    const storage = getStorage(app);
    const storageRef = ref(storage, `users/${fileName}`);

    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on('state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setPerc(Math.round(progress));
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
          default:
            break;
        }
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setInputs((prev) => ({ ...prev, img: downloadURL }));
        });
      }
    );
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    const credentials = {
      ...inputs,
    };

    dispatch(registerUser({ credentials, toast }));
  };

  useEffect(() => {
    file && uploadFile(file);
  }, [file]);

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
          name='username'
          placeholder='username'
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type='password'
          name='password'
          placeholder='password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleLogin}>Sign in</Button>
        <Title>or</Title>
        <Button onClick={signInWithGoogle}>Signin with Google</Button>
        <Title>or</Title>
        {perc > 0 ? (
          <ProgressBar>
            <Filler perc={perc}>
              <Label>{`${perc}%`}</Label>
            </Filler>
          </ProgressBar>
        ) : (
          <Input
            id='file'
            type='file'
            accept='image/*'
            onChange={(e) => setFile(e.target.files[0])}
          />
        )}
        <Input
          type='text'
          name='name'
          placeholder='name'
          onChange={handleChange}
        />
        <Input
          type='text'
          name='username'
          placeholder='username'
          onChange={handleChange}
        />
        <Input
          type='email'
          name='email'
          placeholder='email'
          onChange={handleChange}
        />
        <Input
          type='password'
          name='password'
          placeholder='password'
          onChange={handleChange}
        />
        <Input
          type='password'
          name='passwordConfirm'
          placeholder='confirm password'
          onChange={handleChange}
        />
        <Button onClick={handleRegister}>Sign up</Button>
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

const ProgressBar = styled.div`
  width: 100%;
  height: 1.3rem;
  background-color: #e0e0de;
  border-radius: 0.75rem;
`;

const Filler = styled.div`
  width: ${({ perc }) => perc}%;
  height: 100%;
  background-color: #3ea6ff;
  border-radius: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Label = styled.span`
  font-weight: bold;
  font-size: 1.1rem;
  color: #fff;
  padding: 0.5rem;
  letter-spacing: 0.7px;
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
