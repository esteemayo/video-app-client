import styled from 'styled-components';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Card from './Card';
import { fetchRecommendedVideos } from 'features/video/videoSlice';

const Recommendation = ({ tags, videoId }) => {
  const dispatch = useDispatch();
  const { recommendedVideos } = useSelector((state) => ({ ...state.video }));

  useEffect(() => {
    tags && dispatch(fetchRecommendedVideos(tags));
  }, [tags, dispatch]);

  return (
    <Container>
      {recommendedVideos
        ?.filter((item) => item._id !== videoId)
        .map((item) => {
          return <Card key={item._id} {...item} type='sm' />;
        })
      }
    </Container>
  );
};

const Container = styled.div`
  flex: 2;
`;

export default Recommendation;
