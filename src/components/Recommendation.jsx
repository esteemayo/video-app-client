import styled from 'styled-components';
import { useSelector } from 'react-redux';

import Card from './Card';

const Recommendation = () => {
  const { recommendedVideos } = useSelector((state) => ({ ...state.video }));

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
