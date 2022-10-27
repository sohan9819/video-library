import styled from 'styled-components'

export const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.bg};
  height: 5.6rem;
  z-index: 10;
`
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0rem 2rem;
  position: relative;
`
export const Search = styled.div`
  width: 40%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  border: 2px solid ${({ theme }) => theme.soft};
  border-radius: 3px;
  color: ${({ theme }) => theme.text};
  gap: 0.6rem;
  & .search-icon {
    font-size: 1.6rem;
  }
`
export const Input = styled.input`
  width: 100%;
  border: none;
  background: transparent;
  outline: none;
  color: inherit;
`
export const Button = styled.button`
  padding: 0.5rem 1.5rem;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 0.3rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  & .user-icon {
    font-size: 2.2rem;
  }
  &:hover {
    background: #3ea6ff;
    color: ${({ theme }) => theme.bg};
  }
`

export const User = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;

  & .video-icon {
    font-size: 3rem;
  }
`

export const Avatar = styled.img`
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;
  background-color: #999;
`
