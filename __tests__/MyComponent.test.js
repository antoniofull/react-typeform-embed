import React from 'react'
import { render, cleanup } from '@testing-library/react'
import MyComponent from '../src'

afterEach(cleanup)

describe('<MyComponent>', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<MyComponent />)
    expect(asFragment()).toMatchSnapshot()
  })
})
