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

const Container = styled.div``;

const Text = styled.h2``;

export default LoadingToRedirect;
