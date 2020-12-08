import React from 'react'
import { Container, Image, Text } from './styles'

const Slider = (): JSX.Element => {
  return (
    <Container>
      <Text>
        <h3>The first headline</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
          imperdiet quam auctor enim aliquam bibendum. Fusce eu tincidunt nisl,
          eget lacinia ex. Vivamus auctor sodales quam. Proin dui nulla, sodales
          vitae ante ac, maximus lacinia magna.
        </p>
      </Text>
      <Image />
    </Container>
  )
}

export default Slider
