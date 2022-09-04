import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  font-family: 'Lato', sans-serif;
  background-color: ${({ theme }) => theme.bg};
`

export const Main = styled.div`
  flex: 7;
  background-color: ${({ theme }) => theme.bgLighter};
`
export const Wrapper = styled.div`
  padding: 1.2rem 2rem 2.2rem;
  /* padding: 2.2rem 9.6rem; */
`
