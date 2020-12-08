import React, { useContext } from 'react'
// Styles
import { Container, Timer, Result, TeamOne, TeamTwo } from './styles'
// Icons
import StarIcon from '@material-ui/icons/Star'
import StarBorderIcon from '@material-ui/icons/StarBorder'
// Context
import { Favorite } from '../../../context/FavoriteContext'
// Helpers
import { statusConverter } from '../../../helpers/matchConverters'
import { shortener } from '../../../helpers/shortener'

type PropTypes = {
  id: number
  hometeam: string
  awayteam: string
  status: string
}

const MatchResult = ({
  id,
  hometeam,
  awayteam,
  status
}: PropTypes): JSX.Element => {
  const { favmatches, setFavorite } = useContext(Favorite)
  return (
    <Container>
      <Timer>{statusConverter(status)}</Timer>
      <TeamOne>{shortener(hometeam)}</TeamOne>
      <Result>0 - 0</Result>
      <TeamTwo>{shortener(awayteam)}</TeamTwo>
      {favmatches.indexOf(id) >= 0 ? (
        <StarIcon
          style={{
            justifySelf: 'end',
            color: '#F4E122',
            cursor: 'pointer',
            height: '18px',
            width: 'auto'
          }}
          onClick={() => {
            setFavorite({ type: 'REMOVE_FAVORITE', payload: id })
          }}
        />
      ) : (
        <StarBorderIcon
          style={{
            justifySelf: 'end',
            color: '#F4E122',
            cursor: 'pointer',
            height: '18px',
            width: 'auto'
          }}
          onClick={() => {
            setFavorite({ type: 'ADD_FAVORITE', payload: id })
          }}
        />
      )}
    </Container>
  )
}

export default MatchResult
