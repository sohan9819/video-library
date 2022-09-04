import React from 'react'
import {
  Container,
  Wrapper,
  Title,
  SubTitle,
  Input,
  Button,
  More,
  Links,
  Link,
  Form,
} from './SignIn.styles'

export const SignIn = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Signin</Title>
        <SubTitle>to continue to AnimeTube</SubTitle>
        <Form>
          <Input placeholder="username" required />
          <Input type={'password'} placeholder="password" required />
          <Button type={'submit'}>SignIn</Button>
        </Form>
        <Title>or</Title>
        <Form>
          <Input placeholder="username" required />
          <Input type={'email'} placeholder="email" required />
          <Input type={'password'} placeholder="password" required />
          <Button type={'submit'}>SignUp</Button>
        </Form>
      </Wrapper>
      <More>
        English(USA)
        <Links>
          <Link>Help</Link>
          <Link>Privacy</Link>
          <Link>Terms</Link>
        </Links>
      </More>
    </Container>
  )
}
