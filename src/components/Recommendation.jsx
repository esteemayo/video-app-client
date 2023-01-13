import styled from 'styled-components';
import Card from './Card';

const Recommendation = () => {
  return (
    <Container>
      <Card type='sm' />
    </Container>
  );
};

const Container = styled.div`
  flex: 2;
`;

export default Recommendation;
