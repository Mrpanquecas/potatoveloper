import "@testing-library/jest-dom/extend-expect"
import { render, screen } from "@testing-library/react"
import HomeScreenPage from "../pages"

describe("it renders the homescreen", () => {
  render(<HomeScreenPage />)
  it("renders section 1", () => {
    expect(screen.getByTestId("slide1")).toBeInTheDocument()
    expect(screen.getByTestId("slide2")).toBeInTheDocument()
    expect(screen.getByTestId("slide3")).toBeInTheDocument()
    expect(screen.getByTestId("slide4")).toBeInTheDocument()
  })
})
