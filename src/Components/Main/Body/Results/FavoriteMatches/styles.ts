import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 5px 10px;
  background-color: ${props => props.theme.dark.backgroundMatches};
  border-radius: 5px;
  box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.1);
`

export const Header = styled.div`
  display: grid;
  grid-template-columns: 22px auto 20px;
  width: 100%;
  margin: 4px 0px 6px;
  padding: 1px 5px 0px;
`
export const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const Tag = styled.div`
  justify-self: start;
  align-self: center;
  font-size: 14px;
  & span {
    margin-left: 8px;
  }
`
