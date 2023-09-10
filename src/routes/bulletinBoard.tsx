import { Button, Image, Text, makeStyles, shorthands, tokens } from "@fluentui/react-components"
import React from "react"
import { type NonIndexRouteObject } from "react-router-dom"

const useStyle = makeStyles({
    root: {
        display: "flex",
        flexDirection: "column",
        alignItem: "center",
        maxWidth: "100%",
        height: "100vh"
    },
    title: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end"
    },
    head: {
        maxWidth: "1360px",
        marginTop: "8vh",
        marginRight: "10vw",
        paddingBottom: "10px",
        marginLeft: "10vw",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        ...shorthands.borderBottom(tokens.borderRadiusSmall),
        ...shorthands.borderColor(tokens.colorNeutralForeground1),
        ...shorthands.borderStyle("none", "none", "solid", "none")
    },
    loginButton: {
        height: "40px",
        maxWidth: "200px",
        alignSelf: "flex-end"
    }
})

const BulletinBoard: React.FC = () => {
    const style = useStyle()

    return (
        <div className={style.root}>
            <div className={style.head}>
                <Image src="/baramiLogo.png" alt="logo" width="106" height="56"/>
                <Text size={800} className={style.title}>총무 정산 시스템</Text>
                <Button appearance="primary" size="large" className={style.loginButton}>통합 SSO 로그인</Button>
            </div>

        </div>
    )
}

const route: NonIndexRouteObject = {

    path: "board",
    element: <BulletinBoard/>
}

export default route
