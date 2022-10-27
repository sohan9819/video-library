import {
  Container,
  Wrapper,
  Search,
  Input,
  Button,
  User,
  Avatar,
} from '../Navbar/Navbar.styles'
import {
  MdOutlineAccountCircle,
  MdOutlineSearch,
  MdOutlineVideoCall,
} from 'react-icons/md'
import { Link } from 'react-router-dom'
import { getCurrentUser } from '../../features/auth/authSlice'
import { useSelector } from 'react-redux'

export const Navbar = () => {
  const currentUser = useSelector(getCurrentUser)

  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder="Search"></Input>
          <MdOutlineSearch className="search-icon" />
        </Search>
        {currentUser ? (
          <>
            <User>
              <MdOutlineVideoCall className="video-icon" />
              <Avatar src={currentUser.img} />
              {currentUser.name}
            </User>
          </>
        ) : (
          <Link to={'/signin'}>
            <Button>
              <MdOutlineAccountCircle className="user-icon" />
              SIGN IN
            </Button>
          </Link>
        )}
      </Wrapper>
    </Container>
  )
}
