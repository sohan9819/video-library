import styled from 'styled-components'

export const Container = styled.div`
  width: calc(100vw * 0.82);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  border-top: 1px solid ${({ theme }) => theme.soft};
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  margin-bottom: 1.2rem;
  overflow-x: scroll;
  scrollbar-width: none;

  /* width */
  &::-webkit-scrollbar {
    width: 0.4rem;
    display: none;
  }
`

export const Tag = styled.div`
  width: max-content;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.textSoft};
  border-radius: 1.6rem;
  font-size: 1.6rem;
  margin: 1rem 0rem 1rem;
  &:hover {
    color: ${({ theme }) => theme.soft};
    background-color: ${({ theme }) => theme.textSoft};
  }
`
