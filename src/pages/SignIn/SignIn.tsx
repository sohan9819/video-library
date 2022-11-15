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
import axios from 'axios'
import { useDispatch } from 'react-redux'
import {
  loginStart,
  loginSuccess,
  loginFailure,
} from '../../features/auth/authSlice'
import { auth, provider } from '../../firebase'
import { signInWithPopup } from 'firebase/auth'
import { FcGoogle } from 'react-icons/fc'
import { useNavigate } from 'react-router-dom'

export const SignIn = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement> | any) => {
    e.preventDefault()
    const name = e.target.username.value
    const password = e.target.password.value
    dispatch(loginStart())
    try {
      const res = await axios.post('/auth/signin', {
        name,
        password,
      })
      console.log('Response  :', res.data)
      dispatch(loginSuccess(res.data))
      navigate('/')
    } catch (_e) {
      const error = _e as Error
      console.log('Error : ', error.message)
      dispatch(loginFailure(error.message))
    }
    e.target.reset()
  }
  const handleSignUp = async (e: React.FormEvent<HTMLFormElement> | any) => {
    e.preventDefault()
    const name = e.target.username.value
    const email = e.target.email.value
    const password = e.target.password.value

    console.log('User data ', name, email, password)

    try {
      dispatch(loginStart())
      const res = await axios.post('/auth/signup', {
        name,
        email,
        password,
      })
      console.log('Response  :', res.data)
      dispatch(loginSuccess(res.data))
      navigate('/')
    } catch (_e) {
      const error = _e as Error
      console.log('Error : ', error.message)
      dispatch(loginFailure(error.message))
    }
    e.target.reset()
  }

  const handleGoogleSignIn = async () => {
    dispatch(loginStart())
    signInWithPopup(auth, provider)
      .then((res) => res.user)
      .then((user) => {
        axios
          .post('/auth/google', {
            name: user.displayName,
            email: user.email,
            img: user.photoURL,
          })
          .then((res) => {
            dispatch(loginSuccess(res.data))
            navigate('/')
          })
      })
      .catch((_e) => {
        const error = _e as Error
        console.log('Error : ', error.message)
        dispatch(loginFailure(error.message))
      })
  }

  return (
    <Container>
      <Wrapper>
        <Title>Signin</Title>
        <SubTitle>to continue to AnimeTube</SubTitle>
        <Form onSubmit={handleSignIn}>
          <Input name="username" placeholder="username" required />
          <Input
            name="password"
            type={'password'}
            placeholder="password"
            required
          />
          <Button type={'submit'}>SignIn</Button>
        </Form>
        <Title>or</Title>
        <Button onClick={handleGoogleSignIn}>
          Sigin with <FcGoogle className="google-icon" />
        </Button>
        <Title>or</Title>
        <Form onSubmit={handleSignUp}>
          <Input name="username" placeholder="username" required />
          <Input name="email" type={'email'} placeholder="email" required />
          <Input
            name="password"
            type={'password'}
            placeholder="password"
            required
          />
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
