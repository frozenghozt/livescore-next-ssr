import React, { useContext } from 'react'
// Components
import SidebarItem from '../../Reusable/SidebarItem/SidebarItem'
// Styles
import { Container, Title, ItemContainer } from './styles'
// Context
import { Structure } from '../../../context/StructureContext'

const SidebarMain: React.FC = () => {
  const items = useContext(Structure)
  return (
    <Container>
      <Title>
        <span>Most Popular</span>
      </Title>
      <ItemContainer>
        {items.map((item, i) => (
          <SidebarItem
            key={i}
            icon={item.data.icon.url}
            name={item.data.league[0].text}
            slug={item.slugs[0]}
          />
        ))}
      </ItemContainer>
    </Container>
  )
}

export default SidebarMain
