import "@testing-library/jest-dom/extend-expect"
import { render, screen } from "@testing-library/react"
import { renderHook } from '@testing-library/react-hooks';
import { useClippy, AGENTS, ClippyProvider } from '@react95/clippy';
import HomeScreen from "main/HomeScreen"
import Main from "../pages/_app"

describe("it renders the homescreen", () => {
  render(<Main />)
  it("renders section 1", () => {
    expect(screen.getByTestId("slide1")).toBeInTheDocument()
    expect(screen.getByTestId("slide2")).toBeInTheDocument()
    expect(screen.getByTestId("slide3")).toBeInTheDocument()
    expect(screen.getByTestId("slide4")).toBeInTheDocument()
  })
})


describe("it renders clippy", () => {
  it('should get agent from ClippyContext', () => {
    const wrapper = ({ children }) => (
      <ClippyProvider>{children}</ClippyProvider>
    );
    const { result } = renderHook(() => useClippy(), { wrapper });
    const { clippy: agent } = result.current;

    expect(agent).toBeTruthy();
  });
})