import { type IndexRouteObject } from "react-router/dist/lib/context"
import { ReactComponent as ReactLogo } from "../icon/logo.svg"
import "../style/landing.css"
import { Link, Slider, type SliderOnChangeData, Text, Button } from "@fluentui/react-components"
import React, { type ChangeEvent, useCallback, useState, type MouseEvent } from "react"
import RouteLink from "../components/RouteLink"
import BaramiLogo from "../components/BaramiLogo"

const View: React.FC = () => {
    return (
        <div className="App">
            <header className="App-header">
                <BaramiLogo height={86} preserveAspectRatio="xMinYMax"/>
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
    const [count, setCount] = useState(0)
    const sliderAction = useCallback((event: ChangeEvent, data: SliderOnChangeData) => {
        setCount(data.value)
    }, [setCount])
    const increaseAction = useCallback((event: MouseEvent) => {
        setCount(number => number + 1)
    }, [setCount])
    const decreaseAction = useCallback((event: MouseEvent) => {
        setCount(number => number - 1)
    }, [setCount])
    return (
        <div>
            <div>
                <Button onClick={increaseAction}>Increase</Button>
                <Button onClick={decreaseAction}>Decrease</Button>
            </div>
            <Slider onChange={sliderAction} value={count}/>
        </div>
    )
}

const route: IndexRouteObject = {
    index: true,
    path: undefined,
    element: <View />
}

export default route
