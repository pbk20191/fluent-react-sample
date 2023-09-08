import React, { type Ref, forwardRef } from "react"
import {
    useLink_unstable,
    useLinkState_unstable,
    type LinkProps as FluentLinkProps,
    useLinkStyles_unstable, type LinkSlots, assertSlots
} from "@fluentui/react-components"
import {
    NavLink as RemixNavLink,
    type NavLinkProps as RemixNavLinkProps
} from "react-router-dom"
import { type RouteLinkProps } from "./RouteLink"

export type RouteNavLinkProps = Omit<RouteLinkProps, "className" | "style" | "children"> & RemixNavLinkProps

const RouteNavLink = forwardRef((props: RouteNavLinkProps, ref: Ref<HTMLAnchorElement>) => {
    // @ts-expect-error ignore
    const state = useLink_unstable({ ...{ as: "a" }, ...props }, ref)
    useLinkStyles_unstable(state)
    useLinkState_unstable(state)
    if (state.root.as !== "a") {
        state.root.as = undefined
    }
    assertSlots<LinkSlots>(state)
    // @ts-expect-error ignore
    return (<RemixNavLink {...props} {...state.root} as={undefined}/>)
})

RouteNavLink.displayName = "RouteNavLink"

export default RouteNavLink
