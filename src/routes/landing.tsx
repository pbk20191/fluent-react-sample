import { type IndexRouteObject } from "react-router/dist/lib/context"
import logo from "../logo.svg"
import "../App.css"
import { Image, Link, Text } from "@fluentui/react-components"
import React from "react"
import RouteLink from "../components/RouteLink"

const View: React.FC = () => {
    return (
        <div className="App">
            <header className="App-header">
                <Image src={logo} className="App-logo" alt="logo" />
                <Text>
                    Edit <code>src/App.tsx</code> and save to reload.
                </Text>
                <Link
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </Link>
                <RouteLink to="authorize">Login</RouteLink>
                <MyScreen/>
            </header>
        </div>
    )
}

const MyScreen: React.FC = () => {
    return (<div>
    </div>)
}

const route: IndexRouteObject = {
    index: true,
    path: undefined,
    element: <View />
}

export default route
