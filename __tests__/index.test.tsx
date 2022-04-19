import "@testing-library/jest-dom/extend-expect"
import { render, screen } from "@testing-library/react"
import HomeScreenPage from "../pages"
import ProjectsWindow from "../src/main/windows/ProjectsWindow"
import SocialMediaWindow from "../src/main/windows/SocialMediaWindow"
import TraitsWindow from "../src/main/windows/TraitsWindow"

describe("it renders the homescreen", () => {
  it("should render all sections", () => {
    render(<HomeScreenPage />)
    expect(screen.getByTestId("slide1")).toBeInTheDocument()
    expect(screen.getByTestId("slide2")).toBeInTheDocument()
    expect(screen.getByTestId("slide3")).toBeInTheDocument()
    expect(screen.getByTestId("slide4")).toBeInTheDocument()
  })
})

describe("If we press x the window should be closed and an icon should appear", () => {
  it("closes the traits window and displays the icon", () => {
    render(<TraitsWindow title="developer.exe" />)
    const element = screen.getByText("x")
    element.click()
    expect(screen.getByAltText("folder")).toBeInTheDocument()
  })

  it("closes the project window and displays the icon", () => {
    render(<ProjectsWindow title="projects.exe" />)
    const element = screen.getByText("x")
    element.click()
    expect(screen.getByAltText("folder")).toBeInTheDocument()
  })

  it("closes the project window and displays the icon", () => {
    render(<SocialMediaWindow title="social_media.exe" />)
    const element = screen.getByText("x")
    element.click()
    expect(screen.getByAltText("folder")).toBeInTheDocument()
  })
})