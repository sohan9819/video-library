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

export const Actions = styled.div`
  justify-self: flex-end;
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
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

type ButtonType = {
  variant: 'edit' | 'delete'
}

export const Button = styled.button<ButtonType>`
  height: max-content;
  width: max-content;
  padding: 0.5rem 1.5rem;
  background-color: transparent;
  border: 1px solid
    ${(props) => (props.variant == 'edit' ? '#ffb86c' : '#ff5555')};
  color: ${(props) => (props.variant == 'edit' ? '#ffb86c' : '#ff5555')};
  border-radius: 0.3rem;
  font-weight: 500;
  margin-top: 1rem;
  cursor: pointer;
  /* display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem; */

  &:hover {
    background: ${(props) => (props.variant == 'edit' ? '#ffb86c' : '#ff5555')};
    color: ${({ theme }) => theme.bg};
  }
`
// #ffb86c
