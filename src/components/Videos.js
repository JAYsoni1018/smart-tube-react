import { Box, Stack } from "@mui/material";
import VideoCard from "./VideoCard";

const Videos = ({ videos, direction }) => {
  // console.log(videos);
  return (
    <Stack mt={"12px"} direction={direction ? { direction } : 'row'} flexWrap="wrap" alignItems='center'
      justifyContent="center" gap={2}>
      {
    

        videos.map((item, index) => (

          <Box key={index + 1} >
            {/* {item.video.videoId && <VideoCard video={item.video}/>} */}
            <VideoCard video={item.video} />

            {/* {console.log(item)}  */}
          </Box>

        ))
       
      }
    </Stack>
  )
}

export default Videos;