import { render, screen } from '@testing-library/react'
import { Greet } from './Greet'

describe('Greet component test', () => {
  test('Component', () => {
    render(<Greet />)
    const greetElement = screen.getByText(/bye bro/i)
    expect(greetElement).toBeInTheDocument()
  })

  // nested
  // describe('Greet component with prop test', () => {
  //     test('Component with a person name as a prop', () => {
  //       render(<Greet name='Gopal' />)
  //       const greetElement = screen.getByText(/bye Gopal bro/i)
  //       expect(greetElement).toBeInTheDocument()
  //     })
  //   })
})

describe('Greet component with prop test', () => {
  test('Component with a person name as a prop', () => {
    render(<Greet name='Gopal' />)
    const greetElement = screen.getByText(/bye Gopal bro/i)
    expect(greetElement).toBeInTheDocument()
  })
})
