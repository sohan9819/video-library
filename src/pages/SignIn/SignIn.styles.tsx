import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 5.6rem);
  color: ${({ theme }) => theme.text};
  flex-direction: column;
  gap: 1rem;
`
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: ${({ theme }) => theme.bgLighter};
  border: 1px solid ${({ theme }) => theme.soft};
  padding: 2rem 5rem;
  gap: 1rem;
`

export const Title = styled.h1`
  font-size: 2.4rem;
`

export const SubTitle = styled.h2`
  font-size: 2rem;
  font-weight: 300;
`
export const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.soft};
  border-radius: 3px;
  padding: 1rem;
  background: transparent;
  width: 100%;
  color: inherit;
`
export const Button = styled.button`
  border-radius: 3px;
  border: none;
  padding: 1rem 2rem;
  font-weight: 500;
  cursor: pointer;
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.textSoft};
`
export const More = styled.div`
  display: flex;
  font-size: 1rem;
  color: ${({ theme }) => theme.textSoft};
`

export const Links = styled.div`
  margin-left: 5rem;
`
export const Link = styled.span`
  margin-left: 3rem;
`

export const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: transparent;
  gap: 1rem;
`
