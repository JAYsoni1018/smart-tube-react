
import Home from "./components/Home"
import VideoDetail from "./components/VideoDetail"
import ChannelDetail from "./components/ChannelDetail"
import SearchFeed from "./components/SearchFeed"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import { Box } from "@mui/material"
function App() {

  return (
    <>
      <BrowserRouter>
          <Navbar />
        <Box sx={{ backgroundColor: "#000 "}}>
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/video/:id' exact element={<VideoDetail />} />
            <Route path='/channel/:id' exact element={<ChannelDetail />} />
            <Route path='/search/:searchItem' exact element={<SearchFeed />} />

          </Routes>
        </Box>
      </BrowserRouter>
    </>
  )
}

export default App
