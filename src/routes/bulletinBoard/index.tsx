import { Button, Text, makeStyles, shorthands, tokens } from "@fluentui/react-components"
import React from "react"
import { Outlet, type NonIndexRouteObject } from "react-router-dom"
import BaramiLogo from "../../components/BaramiLogo"
import aboutApple from "./aboutApple"
import aboutPineapple from "./aboutPineapple"
import RouteLink from "../../components/RouteLink"
import { Drawer, DrawerBody, DrawerHeader, DrawerHeaderTitle } from "@fluentui/react-components/unstable"
import { Dismiss24Regular } from "@fluentui/react-icons"
import aboutLime from "./aboutLime"
import aboutDetail from "./aboutDetail"

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
        ...shorthands.borderWidth("1px"),
        ...shorthands.borderStyle("none", "none", "solid", "none")
    },
    loginButton: {
        height: "40px",
        maxWidth: "200px",
        alignSelf: "flex-end"
    },
    content: {
        width: "65vw",
        // height: "70vh",
        marginTop: "20px",
        // backgroundColor: tokens.colorBrandBackground,
        alignSelf: "center"
    },
    navHead: {
        display: "flex",
        alignSelf: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        width: "20vw"
    }
})

const BulletinBoard: React.FC = () => {
    const style = useStyle()
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <div className={style.root}>

            <nav className={style.navHead}>
                <RouteLink to="apple">사과 링크</RouteLink>
                <RouteLink to="lime">라임 링크</RouteLink>
                <RouteLink to="pineapple">파인애플 링크</RouteLink>
            </nav>
            <div className={style.content}>
                <Outlet/>
            </div>
        </div>
    )
}

const route: NonIndexRouteObject = {

    path: "board",
    element: <BulletinBoard/>,
    children: [
        aboutApple,
        aboutLime,
        aboutDetail,
        aboutPineapple
    ]
}

export default route
