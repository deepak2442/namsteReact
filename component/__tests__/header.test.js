import { fireEvent, render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import appStore from "../../utills/appStore"
import Header from "../header"
import "@testing-library/jest-dom"

it("should load the header components",() => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button",{name:"Login"})

    expect(loginButton).toBeInTheDocument();
})

it("should render header component with cart items",() => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )

    const cartItems = screen.getByText(/Cart/);

    expect(cartItems).toBeInTheDocument();
})


it("should render header component with cart items",() => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )

const loginButton =  screen.getByRole("button",{name:"Login"})

fireEvent.click(loginButton)

const logOutButton = screen.getByRole("button", {name: "Logout"})

expect(logOutButton).toBeInTheDocument();


})
