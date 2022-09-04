import styled from 'styled-components'

export const Container = styled.div``

export const NewComment = styled.div`
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
