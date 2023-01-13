import styled from 'styled-components';
import { useDispatch } from 'react-redux';

const Search = () => {
  const dispatch = useDispatch();

  return (
    <Container>Search</Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export default Search;
