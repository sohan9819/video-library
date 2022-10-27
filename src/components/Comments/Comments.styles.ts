import styled from 'styled-components'

export const Container = styled.div``

export const NewComment = styled.form`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: ${({ theme }) => theme.text};
`
export const Avatar = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
`
export const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  background-color: transparent;
  outline: none;
  padding: 0.5rem;
  width: 100%;
  color: inherit;
`

export const Button = styled.button`
  padding: 0.5rem 1.5rem;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 0.3rem;
  font-weight: 500;
  margin-top: 1rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background: #3ea6ff;
    color: ${({ theme }) => theme.bg};
  }
`
