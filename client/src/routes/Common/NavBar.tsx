import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import NavBarButton from './NavBarButton';

const MenuName = ['', 'like', 'shorts', 'search'];
const MenuURL = ['', 'like/songlist', 'shorts/1', 'search'];

const NavBar = () => {
  const [urlNow, setUrlNow] = useState('none');
  const [navStatus, setNavStatus] = useState(false);
  const url = useLocation().pathname.split('/')[1];

  useEffect(() => {
    setUrlNow(url);
    if (url === 'login' || url === 'tag' || url === 'voice') {
      return setNavStatus(false);
    } else {
      setNavStatus(true);
    }
  });

  const render = () => {
    return (
      <>
        <Footer />
        <Menu>
          {MenuName.map((name, idx) => (
            <Link to={`/${MenuURL[idx]}`} key={name}>
              <NavBarButton
                urlNow={urlNow === name}
                change={() => {
                  setUrlNow(name);
                }}
                name={name}
              />
            </Link>
          ))}
        </Menu>
      </>
    );
  };

  return <>{navStatus ? render() : ''}</>;
};

const Menu = styled.nav`
  width: 100%;
  padding: 0 20px;
  padding-bottom: 10px;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  gap: 5px;
  height: 60px;
  background-color: #ffffff;
  z-index: 200;
  box-sizing: border-box;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);
`;

const Footer = styled.div`
  width: 100%;
  height: 100px;
`;

export default NavBar;