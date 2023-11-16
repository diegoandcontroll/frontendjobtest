import { render, screen } from '@testing-library/react'
import Home from './page'
import '@testing-library/jest-dom'
describe("Homepage", () => {
  it('Rendering Home page correctly', () => {
    render(<Home />)
    expect(screen.getByText('Hellow')).toBeInTheDocument();
  })
})

