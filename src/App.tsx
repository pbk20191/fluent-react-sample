import React from "react"
import { RouterProvider } from "react-router-dom"
import routes from "./routes"
import { Button, FluentProvider } from "@fluentui/react-components"
import { useSystemTheme } from "./components/theme"
import { ProvideToast } from "./components/toastCenter"
import { AuthProvider, useAuth, type AuthProviderProps } from "react-oidc-context"

// gP1T8blrgtSi4qi_OA2ivDVoL0rMr-ajSt-Gbdd7Oc9KCD9U
// sore-gull@example.com
// Dangerous-Penguin-35

const oidcConfig: AuthProviderProps = {
    authority: "https://accounts.google.com/o/oauth2/v2/auth",
    client_id: "407408718192.apps.googleusercontent.com",
    redirect_uri: "https://www.oauth.com/playground/oidc.html",
    response_type: "code",
    scope: "openid"
    // ...
}

const Client: React.FC = () => {
    const auth = useAuth()
    switch (auth.activeNavigator) {
        case "signinSilent":
            return <div>Signing you in...</div>
        case "signoutRedirect":
            return <div>Signing you out...</div>
    }
    if (auth.isLoading) {
        return <div>Loading...</div>
    }

    if (auth.error != null) {
        return (<div>Oops... {auth.error.message}</div>)
    }

    // if (auth.isAuthenticated) {
    return (<RouterProvider router={routes} />)
    // }
    // return (<div><Button onClick={e => {
    //     void auth.signinRedirect(
    //         {
    //             redirect_uri: "https://developers.google.com/oauthplayground"
    //         }
    //     )
    // }
    // }></Button></div>)
}

const App: React.FC = () => {
    const theme = useSystemTheme()
    return (
        <AuthProvider {...oidcConfig}>
            <FluentProvider theme={theme}>
                <ProvideToast>
                    <Client/>
                </ProvideToast>
            </FluentProvider>
        </AuthProvider>
    )
}

export default App
