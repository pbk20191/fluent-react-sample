import { Image, type ImageProps } from "@fluentui/react-components"
import React from "react"

type BaramiLogoProps = Omit<ImageProps, "srcSet" | "alt">

const BaramiLogo: React.FC<BaramiLogoProps> = (props: BaramiLogoProps) => {
    return (<Image alt="Barami" srcSet="/logo/baramiLogo@1x.png 102w, /logo/baramiLogo@2x.png 204w, /logo/baramiLogo@3x.png 304w" {...props}/>)
}

export default BaramiLogo
