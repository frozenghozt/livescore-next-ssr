import React, { useContext } from 'react'
// Styles
import { Container, CheckBoxLabel, CheckBox } from './styles'
// Context
import { Matches } from '../../../context/MatchesContext'

const ToggleButton = (): JSX.Element => {
  const { isLive, setIsLive } = useContext(Matches)
  return (
    <Container>
      <CheckBox id="checkbox" type="checkbox" />
      <CheckBoxLabel htmlFor="checkbox" onClick={() => setIsLive(!isLive)} />
    </Container>
  )
}

export default ToggleButton
