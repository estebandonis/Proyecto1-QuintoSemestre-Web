import React from 'react'
import { render, screen } from '@testing-library/react'

import ButtonInBox from './ButtonInBox.jsx'

describe('ButtonInBox component', () => {
  it('Renders correctly', () => {
    render(<ButtonInBox />)

    screen.debug()
  })
})
