import { Box, Stack, Typography } from "@mui/material";
import SildeBar from "./SildeBar";
import Videos from "./Videos";
import { useEffect, useState } from "react";
import { fetchData } from "../utils/fetchData";

const Home = () => {
  const [selectedCategory, setselectedCategory] = useState("New")
  const [videos, setVideos] = useState([])
  useEffect(() => {
    fetchData(`search/?q=${selectedCategory}`).then((data) => {
      // console.log(data)
      
      setVideos(data.contents)
    });

  }, [selectedCategory])

  
  // console.log(videos)

  return (
    <>
      <Stack sx={{ flexDirection: { sx: "column", md: "row" }, marginLeft: { sx: "0", md: "9px" } }}>
        <Box sx={{ height: { sx: "auto", md: '92vh' }, padding: { sx: "0", md: "2" }, borderRight: "1px solid #3d3d3d", marginLeft: { sx: "0", md: "9px" } }}>
          <SildeBar selectedCategory={selectedCategory} setselectedCategory={setselectedCategory} />
        </Box>
        <Box p={2} overflow={'auto'} height={'90vh'}>
          <Typography variant="h5" fontWeight={"bold"} mx={"9px"} sx={{ color: "white" }}>{selectedCategory}
            <span style={{ color: "red", marginLeft: "5px" }}>Videos</span>
          </Typography>

        <Videos videos={videos}/>
        </Box>
      </Stack>
    </>

  )
};

export default Home;