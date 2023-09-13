import { ReactComponent as BaramiSVG } from "../icon/barami.svg"
import React from "react"

const BaramiLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    return <BaramiSVG {...props} />
}

export default BaramiLogo
