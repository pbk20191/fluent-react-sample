import { type IndexRouteObject } from "react-router/dist/lib/context"
import { ReactComponent as ReactLogo } from "../icon/logo.svg"
import "../style/landing.css"
import { Link, Text } from "@fluentui/react-components"
import React from "react"
import RouteLink from "../components/RouteLink"
import BaramiLogo from "../components/BaramiLogo"

const View: React.FC = () => {
    return (
        <div className="App">
            <header className="App-header">
                <BaramiLogo width={200}/>
                <ReactLogo className="App-logo" color="#61DAFB"/>
                <Text>
                    Edit <code>src/routes/landing.tsx</code> and save to reload.
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
