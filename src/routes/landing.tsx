import { type IndexRouteObject } from "react-router/dist/lib/context"
import { ReactComponent as ReactLogo } from "../logo.svg"
import "../App.css"
import { Button, Link, Slider, type SliderOnChangeData, Text } from "@fluentui/react-components"
import React, { type MouseEventHandler, useCallback, useState, type ChangeEvent } from "react"
import RouteLink from "../components/RouteLink"
import BaramiLogo from "../components/BaramiLogo"

const View: React.FC = () => {
    console.log("render landing")
    return (
        <div className="App">
            <header className="App-header">
                <BaramiLogo width={200}/>
                <ReactLogo className="App-logo"/>
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
    const increaseAction: MouseEventHandler<HTMLButtonElement> = useCallback((event) => {
        setCount(number => number + 1)
    }, [setCount])
    const decreaseAction: MouseEventHandler<HTMLButtonElement> = useCallback((event) => {
        setCount(number => number - 1)
    }, [setCount])
    const sliderAction = useCallback((event: ChangeEvent<HTMLInputElement>, data: SliderOnChangeData) => {
        setCount(data.value)
    }, [setCount])
    console.log("render MyScreen")
    return (<div>
        <Text>{count}</Text>
        <Button onClick={increaseAction}>Increase</Button>
        <Button onClick={decreaseAction}>Decrease</Button>
        <Slider value={count} onChange={sliderAction}></Slider>
    </div>)
}

const route: IndexRouteObject = {
    index: true,
    path: undefined,
    element: <View />
}

export default route
