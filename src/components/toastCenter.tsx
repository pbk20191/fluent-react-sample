import { useId, useToastController, Toaster } from "@fluentui/react-components"
import React, { createContext, useContext, type PropsWithChildren } from "react"
// import { type UpdateToastOptions, type DispatchToastOptions } from "@fluentui/react-toast"

export interface ToastCenter {
    dispatchToast: (content: React.ReactNode) => void
    dismissToast: (toastId: string) => void
    dismissAllToasts: () => void
    // updateToast: (options: UpdateToastOptions) => void
    pauseToast: (toastId: string) => void
    playToast: (toastId: string) => void
}

type ProvideToastProps = Pick<PropsWithChildren, "children">

const ToastContext = createContext<ToastCenter>({
    dismissAllToasts: () => {
        throw new Error("dismissAllToasts not implemented.")
    },
    playToast: (toastId) => {
        throw new Error("playToast not implemented.")
    },
    dismissToast: function (toastId: string): void {
        throw new Error("dismissToast not implemented.")
    },
    pauseToast: function (toastId: string): void {
        throw new Error("pauseToast not implemented.")
    },
    dispatchToast: function (content: React.ReactNode, options?: any): void {
        throw new Error("dispatchToast not implemented.")
    }
    // ,
    // updateToast: function (options: UpdateToastOptions): void {
    //     throw new Error("updateToast not implemented.")
    // }
})

export const ProvideToast: React.FC<ProvideToastProps> = (props: ProvideToastProps) => {
    const toasterId = useId("toaster")
    const controller = useToastController(toasterId)
    controller.dispatchToast(<div></div>, {
        root: "a"
    })
    return (
        <ToastContext.Provider value={controller}>
            <Toaster toasterId={toasterId}/>
            {props.children}
        </ToastContext.Provider>
    )
}

export const useToastCenter: () => ToastCenter = () => {
    return useContext(ToastContext)
}
