import { render, screen } from '@testing-library/react'
import { Greet } from './Greet'

test('Greet component', () => {
  render(<Greet />)
  const greetElement = screen.getByText(/bye bro/i)
  expect(greetElement).toBeInTheDocument()
})

test('Greet component with a person name', () => {
  render(<Greet name='Gopal' />)
  const greetElement = screen.getByText(/bye Gopal bro/i)
  expect(greetElement).toBeInTheDocument()
})
