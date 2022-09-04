import styled from 'styled-components'

export const Container = styled.div`
  width: ${(props) => (props.typeof === 'sm' ? '36rem' : '26.1rem')};
  margin-bottom: ${(props) => (props.typeof === 'sm' ? '1rem' : '4.5rem')};
  cursor: pointer;
  display: ${(props) => props.typeof === 'sm' && 'flex'};
  gap: 1rem;
  /* color: ${({ theme }) => theme.text}; */
`

export const Image = styled.img`
  width: 100%;
  height: ${(props) => (props.typeof === 'sm' ? '8rem' : '14.6rem')};
  background: #999;
  flex: 1;
`

export const Details = styled.div`
  display: flex;
  margin-top: ${(props) => props.typeof !== 'sm' && '1.6rem'};
  gap: 1.2rem;
  flex: 1;
`

export const ChannelImage = styled.img`
  width: 3.6rem;
  height: 3.6rem;
  border-radius: 50%;
  background-color: #999;
  display: ${(props) => props.typeof === 'sm' && 'none'};
`
export const Texts = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 0.6rem;
`
export const Title = styled.h1`
  font-size: 1.6rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
  margin-bottom: 0.4rem;
  line-height: 2rem;
`
export const ChannelName = styled.h2`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.textSoft};
`
export const Info = styled.div`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.textSoft};
`
