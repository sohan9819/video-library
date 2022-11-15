import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  gap: 2.4rem;
`

export const Content = styled.div`
  flex: 5;
`

export const VideoWrapper = styled.div`
  flex: 5;
`

export const VideoPlayer = styled.video`
  max-height: 720px;
  width: 100%;
  object-fit: cover;
`

// export const VideoPlayer = styled.iframe`
//   width: 100%;
//   height: 30vw;
//   min-height: 20rem;
// `

export const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: 400;
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.text};
`
export const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  word-spacing: 0.2rem;
`
export const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
  font-size: 1.2rem;
`
export const Buttons = styled.div`
  display: flex;
  gap: 2rem;
  color: ${({ theme }) => theme.text};
  font-size: 1.4rem;
`
export const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`

export const Hr = styled.hr`
  margin: 1.5rem 0rem;
  border: 0.5px solid ${({ theme }) => theme.soft};
`

export const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ChannelInfo = styled.div`
  display: flex;
  gap: 2rem;
`
export const Image = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
`
export const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`
export const ChannelName = styled.span`
  font-weight: 500;
  font-size: 1.8rem;
`
export const ChannelCounter = styled.span`
  margin-top: 0.5rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.textSoft};
  font-size: 1.2rem;
`
export const Description = styled.p`
  font-size: 1.4rem;
  line-height: 2rem;
  font-weight: 400;
`

type SubscribeProps = {
  subscribed?: boolean
}

export const Subscribe = styled.button<SubscribeProps>`
  height: max-content;
  background: ${(props) => (props.subscribed ? '#0c0c0ccc' : '#cc1a00')};
  font-weight: 500;
  /* color: ${({ theme }) => theme.text}; */
  color: white;
  border-radius: 0.3rem;
  padding: 1rem 2rem;
  cursor: pointer;
  border: none;
`
