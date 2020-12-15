import React, { useState, useContext } from 'react'
// Components
import MatchResult from '../../../../Reusable/MatchResult/MatchResult'
// Styles
import { Container, Header, Tag, Body } from './styles'
// Icons
import StarRateIcon from '@material-ui/icons/StarRate'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
// Context
import { Matches } from '../../../../../context/MatchesContext'
import { Favorite } from '../../../../../context/FavoriteContext'

const FavoriteMatches: React.FC = () => {
  const [expand, setExpand] = useState(true)
  const { data, isLive } = useContext(Matches)
  const { favmatches } = useContext(Favorite)
  return (
    <Container>
      <Header>
        <StarRateIcon
          style={{
            justifySelf: 'start',
            alignSelf: 'center',
            color: '#F4E122',
            height: '22px',
            width: 'auto'
          }}
        />
        <Tag>
          <span>Favorite Matches</span>
        </Tag>
        {expand ? (
          <ExpandLessIcon
            style={{
              cursor: 'pointer',
              justifySelf: 'end',
              alignSelf: 'center',
              color: '#fff'
            }}
            fontSize="small"
            onClick={() => setExpand(!expand)}
          />
        ) : (
          <ExpandMoreIcon
            style={{
              cursor: 'pointer',
              justifySelf: 'end',
              alignSelf: 'center',
              color: '#fff'
            }}
            fontSize="small"
            onClick={() => setExpand(!expand)}
          />
        )}
      </Header>
      {expand && (
        <Body>
          {data.matches.map(
            ({ id, status, winner, hometeam, awayteam, fulltime }, i) =>
              favmatches.indexOf(id) >= 0 && (
                <MatchResult
                  key={i}
                  id={id}
                  status={status}
                  winner={winner}
                  onlyLive={isLive}
                  hometeam={hometeam}
                  awayteam={awayteam}
                  fulltime={fulltime}
                />
              )
          )}
        </Body>
      )}
    </Container>
  )
}

export default FavoriteMatches
