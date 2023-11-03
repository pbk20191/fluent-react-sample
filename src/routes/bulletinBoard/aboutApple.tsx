import React from "react"
import { type IndexRouteObject } from "react-router-dom"
import { Text, makeStyles } from "@fluentui/react-components"
import RouteLink from "../../components/RouteLink"

const useStyle = makeStyles({
    apple: {
        backgroundColor: "red",
        width: "100%",
        display: "flex",
        flexDirection: "column"

    }
})

const AboutApple: React.FC = () => {
    const style = useStyle()
    return (
        <div className={style.apple}>
            <Text>사과 페이지</Text>

            <RouteLink to="../" replace>현재 페이지는 히스토리에서 히스토리 지우면서 상위 페이지로 가기</RouteLink>
        </div>
    )
}

const route: IndexRouteObject = {
    path: "apple",
    index: true,
    element: <AboutApple/>
}

export default route
