import { ReactComponent as BaramiSVG } from "../icon/barami.svg"
import React from "react"

const BaramiLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    return <BaramiSVG title="barami" {...props} />
}

export default BaramiLogo
