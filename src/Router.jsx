import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
function Router() {
    return(
        <Routes>
                <Route path="/" exact element={<Home />} />
        </Routes>
    )
}

export default Router