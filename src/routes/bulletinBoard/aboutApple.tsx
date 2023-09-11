import React from "react"
import { type IndexRouteObject } from "react-router-dom"
import { Text, makeStyles } from "@fluentui/react-components"

const useStyle = makeStyles({
    apple: {
        backgroundColor: "red",
        width: "100%"
    }
})

const AboutApple: React.FC = () => {
    const style = useStyle()
    return (
        <div className={style.apple}>
            <Text>Apple</Text>
        </div>
    )
}

const route: IndexRouteObject = {
    path: "apple",
    index: true,
    element: <AboutApple/>
}

export default route
