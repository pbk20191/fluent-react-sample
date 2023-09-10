import React from "react"
import { RouterProvider } from "react-router-dom"
import routes from "./routes"
import { FluentProvider } from "@fluentui/react-components"
import { useSystemTheme } from "./components/theme"
import "./App.css"
import { ProvideToast } from "./components/toastCenter"

const App: React.FC = () => {
    const theme = useSystemTheme()
    return (
        <FluentProvider theme={theme}>
            <ProvideToast>
                <RouterProvider router={routes} />
            </ProvideToast>
        </FluentProvider>
    )
}
export default App
