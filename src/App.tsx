import React from "react"
import { RouterProvider } from "react-router-dom"
import routes from "./routes"
import { FluentProvider, makeStyles } from "@fluentui/react-components"
import { useSystemTheme } from "./components/theme"
import "./App.css"

const useAppStyle = makeStyles({
    root: {
        minWidth: "100%",
        minHeight: "100%"
    }
})

const App: React.FC = () => {
    const appStyle = useAppStyle()
    const theme = useSystemTheme()
    return (
        <FluentProvider theme={theme} className={appStyle.root}>
            <RouterProvider router={routes} />
        </FluentProvider>
    )
}
export default App
