import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoadingToRedirect = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => --prev);
    }, [1000]);

    count === 0 && navigate('/signin');
    return () => clearInterval(interval);
  }, [count, navigate]);

  return (
    <Container>
      <Text>Redirecting you in {count} seconds</Text>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`;

const Text = styled.h2`
  font-size: 3rem;
  color: ${({ theme }) => theme.textSoft};
`;

export default LoadingToRedirect;
