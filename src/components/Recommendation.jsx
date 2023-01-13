import { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import Card from './Card';
import { fetchRecommendedVideos } from 'features/video/videoSlice';

const Recommendation = ({ tags }) => {
  const dispatch = useDispatch();
  const { recommendedVideos } = useSelector((state) => ({ ...state.video }));

  useEffect(() => {
    dispatch(fetchRecommendedVideos(tags));
  }, [tags, dispatch]);

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
