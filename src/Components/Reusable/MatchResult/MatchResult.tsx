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
  winner: string
  onlyLive: boolean
  fulltime: {
    hometeam: string
    awayteam: string
  }
}

const MatchResult = ({
  id,
  status,
  winner,
  onlyLive,
  hometeam,
  awayteam,
  fulltime
}: PropTypes): JSX.Element => {
  const { favmatches, setFavorite } = useContext(Favorite)
  const liveCheck = status === 'IN_PLAY' || status === 'PAUSED'
  if (onlyLive === true && liveCheck === false) {
    return null
  }
  return (
    <Container>
      <Timer>{statusConverter(status)}</Timer>
      <TeamOne style={{ fontWeight: winner === 'HOME_TEAM' ? 500 : null }}>
        {shortener(hometeam)}
      </TeamOne>
      <Result>
        {fulltime.hometeam} - {fulltime.awayteam}
      </Result>
      <TeamTwo>{shortener(awayteam)}</TeamTwo>
      {favmatches.indexOf(id) >= 0 ? (
        <StarIcon
          style={{
            justifySelf: 'end',
            color: '#F4E122',
            cursor: 'pointer',
            height: '18px',
            width: 'auto',
            marginRight: '1px'
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
            width: 'auto',
            marginRight: '1px'
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
