import { createBrowserRouter } from "react-router-dom"
import landing from "./landing"
import authorize from "./authorize"

const router = createBrowserRouter([landing, authorize])

export default router
