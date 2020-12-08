import React, { useState, useContext } from 'react'
import Link from 'next/link'
// Components
import MatchResult from '../../../../Reusable/MatchResult/MatchResult'
// Styles
import { Container, Header, Body, Name } from './styles'
// Icons
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
// Context
import { Matches } from '../../../../../context/MatchesContext'
// Helpers
import { imageProvider } from '../../../../../helpers/imageProvider'

type PropTypes = {
  title: string
}

const LeagueMatch = ({ title }: PropTypes): JSX.Element => {
  const { data } = useContext(Matches)
  const [expand, setExpand] = useState(true)
  return (
    <Container>
      <Header>
        <Name>
          <img src={imageProvider(title)} alt="" />
          <Link href="/premier">
            <span>
              <a>{title}</a>
            </span>
          </Link>
        </Name>
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
            ({ id, status, hometeam, awayteam, competition }, i) =>
              title === competition && (
                <MatchResult
                  key={i}
                  id={id}
                  status={status}
                  hometeam={hometeam}
                  awayteam={awayteam}
                />
              )
          )}
        </Body>
      )}
    </Container>
  )
}

export default LeagueMatch
