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

const Button = styled.button``;

export default Navbar;
