import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  gap: 1rem;
  margin: 3rem 0rem;
`

export const Avatar = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
`

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  color: ${({ theme }) => theme.text};
`

export const Name = styled.span`
  font-size: 1.6rem;
  font-weight: 500;
`
export const Date = styled.span`
  font-size: 1.2rem;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
  margin-left: 0.5rem;
`
export const Text = styled.span`
  font-size: 1.4rem;
  font-weight: 400;
  color: ${({ theme }) => theme.text};
  line-height: 2rem;
`
