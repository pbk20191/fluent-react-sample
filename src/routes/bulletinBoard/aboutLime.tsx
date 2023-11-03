import React, { useState } from "react"
import { type IndexRouteObject } from "react-router-dom"
import { Input, Text, makeStyles } from "@fluentui/react-components"
import RouteLink from "../../components/RouteLink"

const useStyle = makeStyles({
    lime: {
        backgroundColor: "lime",
        width: "100%",
        display: "flex",
        flexDirection: "column"
    }
})

const AboutLime: React.FC = () => {
    const style = useStyle()
    const [msg, setMsg] = useState("")

    return (
        <div className={style.lime}>
            <Text>라임 페이지</Text>
            <Input value={msg} onChange={(e, change) => { setMsg(change.value) }}/>
            <RouteLink to={"../detail/" + msg}>입력한 텍스트로 다른 페이지 가기</RouteLink>
        </div>
    )
}

const route: IndexRouteObject = {
    path: "lime",
    index: true,
    element: <AboutLime/>
}

export default route
