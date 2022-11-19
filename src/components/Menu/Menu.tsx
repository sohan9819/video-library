import React from 'react'
import {
  Container,
  Wrapper,
  Logo,
  Img,
  Item,
  Hr,
  Login,
  Button,
  Title,
} from './Menu.styles'
import AnimeTube from '../../img/logo.png'
import { AiFillHome } from 'react-icons/ai'
import {
  MdOutlineExplore,
  MdOutlineSubscriptions,
  MdOutlineVideoLibrary,
  MdOutlineHistory,
  MdOutlineLibraryMusic,
  MdOutlineSportsBasketball,
  MdOutlineMovie,
  MdOutlineArticle,
  MdOutlineLiveTv,
  MdOutlineSettings,
  MdOutlineFlag,
  MdHelpOutline,
  MdSettingsBrightness,
  MdOutlineAccountCircle,
} from 'react-icons/md'
import { IoGameControllerOutline } from 'react-icons/io5'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getCurrentUser, logout } from '../../features/auth/authSlice'

type MenuProps = {
  darkMode: boolean
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}

export const Menu = ({ darkMode, setDarkMode }: MenuProps) => {
  const currentUser = useSelector(getCurrentUser)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logout())
    navigate('/')
  }

  return (
    <Container>
      <Wrapper>
        <Logo>
          <Img src={AnimeTube} />
          AnimeTube
        </Logo>
        <Link to={'/'}>
          <Item>
            <AiFillHome />
            Home
          </Item>
        </Link>
        <Link to={'trends'}>
          <Item>
            <MdOutlineExplore />
            Explore
          </Item>
        </Link>
        <Link to={'subscribtion'}>
          <Item>
            <MdOutlineSubscriptions />
            Subscriptions
          </Item>
        </Link>
        <Hr />
        <Item>
          <MdOutlineVideoLibrary />
          Library
        </Item>
        <Item>
          <MdOutlineHistory />
          History
        </Item>
        {!currentUser ? (
          <>
            <Hr />
            <Login>
              Sign in to like videos , comment and subscribe
              <Link to={'/signin'}>
                <Button>
                  <MdOutlineAccountCircle className="user-icon" />
                  SIGN IN
                </Button>
              </Link>
            </Login>
          </>
        ) : (
          <Button primary onClick={handleLogout}>
            Logout
          </Button>
        )}

        <Hr />
        <Title>Best of AnimeTube</Title>
        <Item>
          <MdOutlineLibraryMusic />
          Music
        </Item>
        <Item>
          <MdOutlineSportsBasketball />
          Sports
        </Item>
        <Item>
          <IoGameControllerOutline />
          Gaming
        </Item>
        <Item>
          <MdOutlineMovie />
          Movies
        </Item>
        <Item>
          <MdOutlineArticle />
          News
        </Item>
        <Item>
          <MdOutlineLiveTv />
          Live
        </Item>
        <Hr />
        <Item>
          <MdOutlineSettings />
          Settings
        </Item>
        <Item>
          <MdOutlineFlag />
          Report
        </Item>
        <Item>
          <MdHelpOutline />
          Help
        </Item>
        <Item onClick={() => setDarkMode((prev) => !prev)}>
          <MdSettingsBrightness />
          {darkMode ? 'Light' : 'Dark'} Mode
        </Item>
      </Wrapper>
    </Container>
  )
}
