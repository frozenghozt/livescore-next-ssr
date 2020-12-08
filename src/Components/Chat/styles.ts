import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  flex-shrink: 0;
  height: 100vh;
  background-color: ${props => props.theme.dark.backgroundSide};
`
