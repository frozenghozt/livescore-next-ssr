import React from 'react'
import { Container } from './styles'
import Link from 'next/link'
// Helpers
import { slugConverter } from '../../../helpers/matchConverters'

type PropTypes = {
  icon: string
  name: string
  slug: string
}

const SidebarItem = ({ icon, name, slug }: PropTypes): JSX.Element => {
  const slugMod = slugConverter(slug)
  return (
    <Container>
      <img src={icon} />
      <Link href={`/${slugMod}`}>
        <a>{name}</a>
      </Link>
    </Container>
  )
}

export default SidebarItem
