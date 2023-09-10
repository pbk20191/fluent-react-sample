import { createBrowserRouter } from "react-router-dom"
import landing from "./landing"
import authorize from "./authorize"
import bulletinBoard from "./bulletinBoard"

const router = createBrowserRouter([landing, authorize, bulletinBoard])

export default router
