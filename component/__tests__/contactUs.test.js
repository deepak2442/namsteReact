import { screen,render } from "@testing-library/react"
import "@testing-library/jest-dom";
import ContactUs from "../contactUs";

test("should load contact us component", () => {
render(<ContactUs />)
    const heading = screen.getByRole("heading")

    // Assertion
     expect (heading).toBeInTheDocument()
})