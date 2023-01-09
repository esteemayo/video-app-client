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
        <Logo>
          <Img src={logo} alt='logo' />
          YouTube
        </Logo>
        <Item>
          <HomeIcon />
          Home
        </Item>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  flex: 1;
  height: 100vh;
  font-size: 1.4rem;
  background-color: #202020;
  color: #fff;
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
`;

export default Menu;
