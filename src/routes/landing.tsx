import { type IndexRouteObject } from "react-router/dist/lib/context"
import { ReactComponent as ReactLogo } from "../icon/logo.svg"
import "../style/landing.css"
import { Link, Slider, Text, Button, Field, Input, Toast, ToastTitle, ToastBody, Dialog, DialogTrigger, DialogSurface, DialogActions, DialogBody, DialogContent, DialogTitle, makeStyles, tokens } from "@fluentui/react-components"
import React, { type PropsWithChildren, useEffect, useState } from "react"
import RouteLink from "../components/RouteLink"
import BaramiLogo from "../components/BaramiLogo"
import { useToastCenter } from "../components/toastCenter"

const useMyStyle = makeStyles({
    red: {
        backgroundColor: "red"
    },
    brandBackground: {
        backgroundColor:
        tokens.colorBrandBackground
    }
})

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

const SmallScreen: React.FC<
PropsWithChildren<{ number: number }>
> = (props) => {
    if (props.number > 40) {
        return <div>{props.children}</div>
    }
    if (props.number > 20) {
        return <div>
            {props.children}
            <Text>{props.number}</Text>
        </div>
    }
    return <div>

        <Text>{props.number}</Text>
        {props.children}
    </div>
}

const ToastButton: React.FC = () => {
    const toastCenter = useToastCenter()
    const style1 = useMyStyle()
    return (<Button onClick={() => {
        toastCenter.dispatchToast(
            <Toast className={style1.brandBackground}>
                <ToastTitle
                    className={style1.red}>
                    Title
                </ToastTitle>
            </Toast>
        )
    }}>Toast!</Button>)
}

const DialogButton: React.FC = () => {
    return (
        <Dialog>
            <DialogTrigger disableButtonEnhancement>
                <Button>Open dialog</Button>
            </DialogTrigger>
            <DialogSurface>
                <DialogBody>
                    <DialogTitle>Dialog title</DialogTitle>
                    <DialogContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            exercitationem cumque repellendus eaque est dolor eius expedita
            nulla ullam? Tenetur reprehenderit aut voluptatum impedit voluptates
            in natus iure cumque eaque?
                    </DialogContent>
                    <DialogActions>
                        <DialogTrigger disableButtonEnhancement>
                            <Button appearance="secondary">Close</Button>
                        </DialogTrigger>
                        <Button appearance="primary">Do Something</Button>
                    </DialogActions>
                </DialogBody>
            </DialogSurface>
        </Dialog>
    )
}

const SuccessField: React.FC = () => {
    const [text, setText] = useState("")

    return (
        <Field
            label="simple Label"
            validationState="success"
            validationMessage=
                "This is a success message."
        >
            <Input
                value={text}
                onChange={(_, data) => {
                    setText(data.value)
                }}
            />
        </Field>
    )
}

const MyScreen: React.FC = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log("render MyScreen")
    })
    return (
        <div>
            <div>
                <Button onClick={() => { setCount(n => n + 1) }}>Increase</Button>
                <Button onClick={() => { setCount(n => n - 1) }}>Decrease</Button>
                <ToastButton/>
                <DialogButton/>
            </div>
            <Slider value={count} onChange={(_, data) => { setCount(data.value) }} />
            <SmallScreen number={count}>
                AAAA<span>asdfsdf</span>
            </SmallScreen>
            <SuccessField/>
        </div>
    )
}

const route: IndexRouteObject = {
    index: true,
    path: undefined,
    element: <View />
}

export default route
