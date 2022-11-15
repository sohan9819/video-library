import { useEffect, useState } from 'react'
import {
  Container,
  Wrapper,
  Search,
  Input,
  Button,
  User,
  Avatar,
  SearchButton,
} from '../Navbar/Navbar.styles'
import {
  MdOutlineAccountCircle,
  MdOutlineSearch,
  MdOutlineVideoCall,
} from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import { getCurrentUser } from '../../features/auth/authSlice'
import { useSelector } from 'react-redux'
import { Upload } from '../'

export const Navbar = () => {
  const [open, setOpen] = useState(false)
  // const [q, setQ] = useState('')

  const navigate = useNavigate()

  const currentUser = useSelector(getCurrentUser)

  useEffect(() => {
    open
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflowY = 'scroll')
  }, [open])

  const handleSearch = (e: React.FormEvent<HTMLFormElement> | any) => {
    e.preventDefault()
    const q = e.target.search.value

    if (q) {
      navigate(`/search?q=${q}`)
    }
  }

  return (
    <>
      <Container>
        <Wrapper>
          <Search onSubmit={handleSearch}>
            <Input
              placeholder="Search"
              type={'search'}
              // onChange={(e) => setQ(e.target.value)}
              name="search"
            />
            <SearchButton type="submit">
              <MdOutlineSearch />
            </SearchButton>
          </Search>
          {currentUser ? (
            <>
              <User>
                <MdOutlineVideoCall
                  className="video-icon"
                  onClick={() => setOpen(true)}
                />
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
      {open && <Upload setOpen={setOpen} />}
    </>
  )
}
