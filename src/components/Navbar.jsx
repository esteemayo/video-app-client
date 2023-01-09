import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input type='search' placeholder='Search' />
          <SearchOutlinedIcon />
        </Search>
        <Link to='signin' style={{ textDecoration: 'none' }}>
          <Button>
            <AccountCircleOutlinedIcon />
            SIGN IN
          </Button>
        </Link>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  
`;
const Wrapper = styled.div`
  
`;
const Search = styled.div`
  
`;

const Input = styled.input``;

const Button = styled.button`
  display: inline-block;
  padding: 0.5rem 1.5rem;
  font-weight: 500;
  background-color: transparent;
  color: #3ea6ff;
  border: 1px solid #3ea6ff;
  border-radius: 0.3rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export default Navbar;
