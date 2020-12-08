import React, { useRef } from 'react'
// Styles
import { Backdrop, Container, Header, Body } from './styles'
// Icons
import CloseIcon from '@material-ui/icons/Close'
// Hooks
import { useOnClickOutside } from '../../../../hooks/useOnClickOutside'

type PropTypes = {
  onClose: () => void
}

const Sign = ({ onClose }: PropTypes): JSX.Element => {
  const ref = useRef()
  useOnClickOutside(ref, onClose)
  return (
    <Backdrop>
      <Container ref={ref}>
        <Header>
          <CloseIcon
            style={{ cursor: 'pointer' }}
            fontSize="small"
            onClick={onClose}
          />
        </Header>
        <Body>dsfsdfsdf</Body>
      </Container>
    </Backdrop>
  )
}

export default Sign
