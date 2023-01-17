import { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Search = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();

    if (query) {
      navigate(`/search?q=${query}`);
      setQuery('');
    }
  };

  return (
    <Container>
      <Input
        type='text'
        value={query}
        placeholder='Search'
        onChange={(e) => setQuery(e.target.value)}
      />
      <SearchOutlinedIcon onClick={handleSearch} />
    </Container>
  );
};

const Container = styled.div`
  width: 40%;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  color: ${({ theme }) => theme.text};
  border: 1px solid #ccc;
  border-radius: 0.3rem;
`;

const Input = styled.input`
  border: none;
  outline: none;
  display: inline-block;
  width: 100%;
  font-family: inherit;
  background-color: transparent;
  color: inherit;
  -webkit-box-shadow: inset 1px 2px 3px rgba(0, 0, 0, 0.05);
  box-shadow: inset 1px 2px 3px rgba(0, 0, 0, 0.05);
  caret-color: ${({ theme }) => theme.text};
`;

export default Search;
