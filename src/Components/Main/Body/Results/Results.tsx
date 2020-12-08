import React, { useContext, useReducer } from 'react'
// Components
import FavoriteMatches from './FavoriteMatches/FavoriteMatches'
import LeagueMatch from './LeagueMatch/LeagueMatch'
// Styles
import { Container } from './styles'
// Context
import { FavoriteProvider } from '../../../../context/FavoriteContext'
import { Matches } from '../../../../context/MatchesContext'

const initialState = []

const reducer = (state: typeof initialState, { type, payload }) => {
  switch (type) {
    case 'ADD_FAVORITE':
      return [...state, payload]
    case 'REMOVE_FAVORITE':
      return state.filter(id => id !== payload)
    default:
      return state
  }
}

const Results = (): JSX.Element => {
  const { data } = useContext(Matches)
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <FavoriteProvider value={{ favmatches: state, setFavorite: dispatch }}>
      <Container>
        <FavoriteMatches />
        {data.competitions.map((comp, i) => (
          <LeagueMatch key={i} title={comp} />
        ))}
      </Container>
    </FavoriteProvider>
  )
}

export default Results
