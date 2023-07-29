import { Box, Typography } from "@mui/material";
import Videos from "./Videos";
import { useEffect, useState } from "react";
import { fetchData } from "../utils/fetchData";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const [videos, setVideos] = useState([])

  const { searchItem } = useParams();
  useEffect(() => {
    fetchData(`search/?q=${searchItem}`).then((data) => {
      console.log(data)

      setVideos(data?.contents)
    });

  }, [searchItem])


  // console.log(videos)

  return (
    <>

      <Box p={2} overflow={'auto'} height={'90vh'}>
        <Typography variant="h5" fontWeight={"bold"} mx={"9px"} sx={{ color: "white" }}>Search Result for :
          <span style={{ color: "red", marginLeft: "5px" }}>{searchItem.toUpperCase()}</span>
        </Typography>

        <Videos videos={videos} />
      </Box>

    </>

  )
};

export default SearchFeed;