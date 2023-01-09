import styled from 'styled-components';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import SportsBasketballOutlinedIcon from '@mui/icons-material/SportsBasketballOutlined';
import MovieOutlinedIcon from '@mui/icons-material/MovieOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import SettingsBrightnessOutlinedIcon from '@mui/icons-material/SettingsBrightnessOutlined';

import logo from '../img/logo.png';

const Menu = () => {
  return (
    <Container>
      <Wrapper>
        <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
          <Logo>
            <Img src={logo} alt='logo' />
            YouTube
          </Logo>
        </Link>
        <Item>
          <HomeIcon />
          Home
        </Item>
        <Item>
          <ExploreOutlinedIcon />
          Explore
        </Item>
        <Item>
          <SubscriptionsOutlinedIcon />
          Subscriptions
        </Item>
        <Hr />
        <Item>
          <VideoLibraryOutlinedIcon />
          Library
        </Item>
        <Item>
          <HistoryOutlinedIcon />
          History
        </Item>
        <Hr />
        <Login>
          Sign in to like videos, comment, and subscribe.
          <Link to='signin' style={{ textDecoration: 'none' }}>
            <Button>
              <AccountCircleOutlinedIcon />
              SIGN IN
            </Button>
          </Link>
        </Login>
        <Hr />
        <Title>BEST OF LAMATUBE</Title>
        <Item>
          <LibraryMusicOutlinedIcon />
          Music
        </Item>
        <Item>
          <SportsBasketballOutlinedIcon />
          Sports
        </Item>
        <Item>
          <SportsEsportsOutlinedIcon />
          Gaming
        </Item>
        <Item>
          <MovieOutlinedIcon />
          Movies
        </Item>
        <Item>
          <ArticleOutlinedIcon />
          News
        </Item>
        <Item>
          <LiveTvOutlinedIcon />
          Live
        </Item>
        <Hr />
        <Item>
          <SettingsOutlinedIcon />
          Settings
        </Item>
        <Item>
          <FlagOutlinedIcon />
          Report
        </Item>
        <Item>
          <HelpOutlineOutlinedIcon />
          Help
        </Item>
        <Item >
          <SettingsBrightnessOutlinedIcon />
          Dark Mode
        </Item>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  flex: 1;
  height: 100%;
  font-size: 1.4rem;;
  background-color: ${({ theme }) => theme.bgLighter};
  color: ${({ theme }) => theme.text};
  position: sticky;
  top: 0;
`;

const Wrapper = styled.div`
  padding: 1.8rem 2.6rem;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: bold;
  margin-bottom: 2.5rem;
`;

const Img = styled.img`
  height: 2.5rem;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  cursor: pointer;
  padding: 0.75rem 0;

  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`;

const Hr = styled.hr`
  margin: 1.5rem 0;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Login = styled.div``;

const Button = styled.button`
  display: inline-block;
  font-weight: 500;
  padding: 0.5rem 1.5rem;
  background-color: transparent;
  color: #3ea6ff;
  border: 1px solid #3ea6ff;
  border-radius: 0.3rem;
  margin-top: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Title = styled.h2`
  font-size: 1.4rem;
  font-weight: 500;
  color: #aaaaaa;
  margin-bottom: 2rem;
`;

export default Menu;
