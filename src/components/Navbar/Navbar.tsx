import React from 'react'
import {
  Container,
  Wrapper,
  Search,
  Input,
  Button,
} from '../Navbar/Navbar.styles'
import { MdOutlineAccountCircle, MdOutlineSearch } from 'react-icons/md'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder="Search"></Input>
          <MdOutlineSearch className="search-icon" />
        </Search>
        <Link to={'/signin'}>
          <Button>
            <MdOutlineAccountCircle className="user-icon" />
            SIGN IN
          </Button>
        </Link>
      </Wrapper>
    </Container>
  )
}
