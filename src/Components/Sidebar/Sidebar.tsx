import React from 'react'
// Components
import SidebarHeader from './SidebarHeader/SidebarHeader'
import SidebarMain from './SidebarMain/SidebarMain'
// Styles
import { Container } from './styles'

const Sidebar = (): JSX.Element => {
  return (
    <Container>
      <SidebarHeader />
      <SidebarMain />
    </Container>
  )
}

export default Sidebar
