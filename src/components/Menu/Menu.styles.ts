import styled from 'styled-components'

export const Container = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.bg};
  /* min-height: 100vh;
  height: max-content; */
  height: 100vh;
  color: ${({ theme }) => theme.text};
  font-size: 1.4rem;
  position: sticky;
  top: 0;
  /* ############# */
  overflow-y: scroll;
  min-width: 16.5rem;
  /* width */
  &::-webkit-scrollbar {
    width: 0rem;
  }
`

export const Wrapper = styled.div`
  /* padding: 1.8rem1.6rem ; */
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  /* ############### */
  padding: 0rem 1.6rem 1.8rem;
`

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.2rem;
  font-size: 2rem;
  font-family: 'DynaPuff', cursive;
  /* ################## */
  position: sticky;
  top: 0rem;
  padding-top: 2rem;
  background-color: ${({ theme }) => theme.bg};
`
export const Img = styled.img`
  height: 3rem;
`

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  cursor: pointer;
  padding: 0.75rem 0rem 0.75rem 0.5rem;

  &:hover {
    background: ${({ theme }) => theme.soft};
  }
`

export const Hr = styled.hr`
  margin: 1.5rem 0;
  border: 0.5px solid ${({ theme }) => theme.soft};
`

export const Login = styled.div`
  line-height: 1.8rem;
`

type ButtonType = {
  primary?: true
}

export const Button = styled.button<ButtonType>`
  padding: 0.5rem 1.5rem;
  background-color: transparent;
  border: 1px solid ${(props) => (props.primary ? '#ff5555' : '#3ea6ff')};
  color: ${(props) => (props.primary ? '#ff5555' : '#3ea6ff')};
  border-radius: 0.3rem;
  font-weight: 500;
  margin-top: 1rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  & .user-icon {
    font-size: 2.2rem;
  }

  &:hover {
    background: ${(props) => (props.primary ? '#ff5555' : '#3ea6ff')};
    color: ${({ theme }) => theme.bg};
  }
`

export const Title = styled.h2`
  font-size: 1.4rem;
  font-weight: 500;
  color: #aaaaaa;
  margin-bottom: 2rem;
`
