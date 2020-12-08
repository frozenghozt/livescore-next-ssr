import React from 'react'
import Link from 'next/link'
// Styles
import { Container, Title, ItemContainer, Item } from './styles'
// Images
import premiere from '../../../assets/premiere.webp'
import ligue1img from '../../../assets/ligue1.webp'
import bundesligaimg from '../../../assets/bundesliga.webp'
import serieaimg from '../../../assets/seriea.webp'
import eredivisieimg from '../../../assets/eredivisie.webp'
import laligaimg from '../../../assets/laliga.webp'
import championsimg from '../../../assets/champions.webp'
import uefaimg from '../../../assets/uefa.webp'

const SidebarMain: React.FC = () => {
  return (
    <Container>
      <Title>
        <span>Most Popular</span>
      </Title>
      <ItemContainer>
        <Item>
          <img src={premiere} />
          <Link href="/premierleague">
            <a>Premiere League</a>
          </Link>
        </Item>
        <Item>
          <img src={ligue1img} />
          <Link href="/ligueone">
            <a>Ligue 1</a>
          </Link>
        </Item>
        <Item>
          <img src={bundesligaimg} />
          <Link href="/bundesliga">
            <a>Bundesliga</a>
          </Link>
        </Item>
        <Item>
          <img src={serieaimg} />
          <Link href="/seriea">
            <a>Serie A</a>
          </Link>
        </Item>
        <Item>
          <img src={eredivisieimg} />
          <Link href="/eredivisie">
            <a>Eredivisie</a>
          </Link>
        </Item>
        <Item>
          <img src={laligaimg} />
          <Link href="/laliga">
            <a>LaLiga</a>
          </Link>
        </Item>
        <Item>
          <img src={championsimg} />
          <Link href="/champions">
            <a>Champions League</a>
          </Link>
        </Item>
        <Item>
          <img src={uefaimg} />
          <Link href="/europa">
            <a>Europa League</a>
          </Link>
        </Item>
      </ItemContainer>
    </Container>
  )
}

export default SidebarMain
