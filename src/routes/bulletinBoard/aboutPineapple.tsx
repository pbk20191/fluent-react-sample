import React from "react"
import { type IndexRouteObject } from "react-router-dom"
import { Text, makeStyles } from "@fluentui/react-components"

const useStyle = makeStyles({
    pineapple: {
        backgroundColor: "yellow",
        width: "100%"
    }
})

const AboutPineapple: React.FC = () => {
    const style = useStyle()
    return (
        <div className={style.pineapple}>
            <Text>Pineapple</Text>
        </div>
    )
}

const route: IndexRouteObject = {
    path: "pineapple",
    index: true,
    element: <AboutPineapple/>
}

export default route
