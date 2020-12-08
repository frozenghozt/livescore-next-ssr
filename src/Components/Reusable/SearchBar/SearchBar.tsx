import React, { useState } from 'react'
// Hooks
import { useOnClickOutside } from '../../../hooks/useOnClickOutside'
// Styles
import { Container, Search, List } from './styles'

const SearchBar = (): JSX.Element => {
  const [keyword, setkeyword] = useState('')
  const [isOpen, setisOpen] = useState(null)

  // Input keyword search handler
  const keywordChange = e => {
    setkeyword(e.target.value)
  }

  // Ref to the search input and container
  const ref = React.useRef()

  // Search filter on the Search Object
  // const searchResult = []
  // searchObject
  //   .filter(each => each.toLowerCase().includes(keyword))
  //   .map(filteredName => searchResult.push(filteredName))

  // Custom hook to fire when clicked outside/inside
  useOnClickOutside(ref, () => setisOpen(false))

  // Animation trigger
  const triggerAnimation = () => {
    setisOpen(true)
  }

  // ClassName Animation Logic
  let animationClassName
  if (isOpen === null) {
    animationClassName = ''
  } else if (isOpen === true) {
    animationClassName = 'searchenlarge'
  } else {
    animationClassName = 'searchreduce'
  }

  return (
    <Container>
      <input type="text" onChange={keywordChange} placeholder="Search..." />
      <Search
        ref={ref}
        onClick={triggerAnimation}
        className={animationClassName}
      >
        <input
          type="text"
          onChange={keywordChange}
          value={keyword}
          placeholder="Search..."
          ref={ref}
        />
        {keyword.length > 0 && isOpen && (
          <List>
            {/* {searchResult.map((each, i) => (
              <li key={i}>{each}</li>
            ))} */}
          </List>
        )}
      </Search>
    </Container>
  )
}

export default SearchBar
