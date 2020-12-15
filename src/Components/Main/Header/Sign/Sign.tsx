import React, { useRef, useState } from 'react'
import { Formik, FormikHelpers } from 'formik'
import * as yup from 'yup'
// Styles
import { Backdrop, Container, Header, Body, Form, Button } from './styles'
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
  const [auth, setAuth] = useState({ username: '', password: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAuth({ username: e.target.value, password: '' })
  }

  const loginSchema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required()
  })

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
        <Body>
          <Formik
            initialValues={{
              username: '',
              password: ''
            }}
            onSubmit={() => console.log('yo')}
            validationSchema={loginSchema}
          >
            <Form>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Type your username"
                onChange={handleChange}
              />
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Type your password"
                onChange={handleChange}
              />
              <Button type="submit">Submit</Button>
            </Form>
          </Formik>
        </Body>
      </Container>
    </Backdrop>
  )
}

export default Sign
