import { render, screen } from '@testing-library/react'
import { Greet } from './Greet'

describe('Greet component test', () => {
  test('Component', () => {
    // render the component on the DOM
    render(<Greet />)
    // find the rendered component
    const greetElement = screen.getByText(/bye bro/i)
    // assert against the element found which will pass or fail the test.
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
