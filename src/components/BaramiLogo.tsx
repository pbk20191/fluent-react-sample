import { Image, type ImageProps } from "@fluentui/react-components"
import React from "react"

type BaramiLogoProps = Omit<ImageProps, "srcSet" | "alt">

const BaramiLogo: React.FC<BaramiLogoProps> = (props: BaramiLogoProps) => {
    return (<Image alt="Barami" srcSet="/logo/baramiLogo@1x.png 1x, /logo/baramiLogo@2x.png 2x, /logo/baramiLogo@3x.png 3x" {...props}/>)
}

export default BaramiLogo
