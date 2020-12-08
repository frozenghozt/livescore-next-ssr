import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 12px;
  padding: 5px 10px;
  background-color: ${props => props.theme.dark.backgroundMatches};
  border-radius: 5px;
  box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.1);
`
export const Header = styled.div`
  display: grid;
  grid-template-columns: 80% 20%;
  padding: 1px 5px 0px;
  width: 100%;
  margin: 4px 0px 6px;
`

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const Name = styled.div`
  display: flex;
  align-items: center;
  justify-self: start;
  align-self: center;
  & span {
    font-size: 14px;
  }
  & img {
    height: auto;
    width: 19px;
    margin-right: 6px;
  }
`
