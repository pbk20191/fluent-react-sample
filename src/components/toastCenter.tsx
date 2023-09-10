import { useId, useToastController, Toaster } from "@fluentui/react-components"
import React, { createContext, useContext, type PropsWithChildren } from "react"

type ProvideToastProps = Pick<PropsWithChildren, "children">

const defaultToastController = {
    dismissAllToasts: function (): void {
        throw new Error("dismissAllToasts not implemented.")
    },
    playToast: function (toastId: string): void {
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
    },
    updateToast: function (options: any): void {
        throw new Error("updateToast not implemented.")
    }
}

const ToastContext = createContext(defaultToastController)

export const ProvideToast: React.FC<ProvideToastProps> = (props: ProvideToastProps) => {
    const toasterId = useId("toaster")

    const controller = useToastController(toasterId)
    return (
        <ToastContext.Provider value={controller}>
            <Toaster toasterId={toasterId}/>
            {props.children}
        </ToastContext.Provider>
    )
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useToastCenter = () => {
    const realObject = useContext(ToastContext)
    const controller = useToastController(undefined)
    type ControllerType = typeof controller
    return realObject as ControllerType
}
