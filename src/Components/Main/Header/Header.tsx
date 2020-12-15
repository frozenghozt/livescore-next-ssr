import React, { useState } from 'react'
import Link from 'next/link'
// Styles
import { Container, LeftSide, CenterSide, RightSide } from './styles'
// Components
import SearchBar from '../../Reusable/SearchBar/SearchBar'
import Sign from './Sign/Sign'

const Header: React.FC = () => {
  const [isModalOpen, SetIsModalOpen] = useState(false)
  return (
    <>
      {isModalOpen && <Sign onClose={() => SetIsModalOpen(false)} />}
      <Container>
        <LeftSide>
          <Link href="/">
            <a>Logo</a>
          </Link>
        </LeftSide>
        <CenterSide>
          <SearchBar />
        </CenterSide>
        <RightSide>
          <button onClick={() => SetIsModalOpen(true)}>Login</button>
        </RightSide>
      </Container>
    </>
  )
}

export default Header
