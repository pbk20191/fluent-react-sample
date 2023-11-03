import React from "react"
import { useParams, type IndexRouteObject } from "react-router-dom"
import { Text, makeStyles } from "@fluentui/react-components"
import RouteLink from "../../components/RouteLink"

const useStyle = makeStyles({
    detail: {
        backgroundColor: "lime",
        width: "100%",
        display: "flex",
        flexDirection: "column"
    }
})

const AboutDetail: React.FC = () => {
    const param = useParams()

    const style = useStyle()
    return (
        <div className={style.detail}>
            <Text>넘겨 받은 데이터 {param.id}</Text>
        </div>
    )
}

const route: IndexRouteObject = {
    path: "detail/:id",
    index: true,
    element: <AboutDetail/>
}

export default route
