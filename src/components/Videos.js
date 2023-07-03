import { Box, Stack } from "@mui/material";
import VideoCard from "./VideoCard";

const Videos = ({ videos }) => {
  // console.log(videos);
  return (
    <Stack mt={"12px"} direction="row" flexWrap="wrap" justifyContent="center" gap={2}>
      {
    

        videos.map((item, idx) => (
          <Box key={idx}>
           {/* {item.video.videoId && <VideoCard video={item.video}/>} */}
        <VideoCard video={item.video}/>

           {/* {console.log(item)}  */}
          </Box>
        ))
       
      }
    </Stack>
  )
}

export default Videos;