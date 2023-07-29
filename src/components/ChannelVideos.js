import { Box, Stack } from '@mui/material';
import React from 'react'
import VideoCard from './VideoCard';
import ChannelVideoCard from './ChannelVideoCard';

const ChannelVideos = ({ videos, channelInfo }) => {
    // console.log(videos);
    return (
        <Stack mt={"12px"} direction="row" flexWrap="wrap" justifyContent="center" gap={2}>
            {


                videos.map((item, idx) => (
                    <Box key={idx}>
                        {/* {item.video.videoId && <VideoCard video={item.video}/>} */}
                        <ChannelVideoCard video={item.video} channelInfo={channelInfo} />

                        {/* {console.log(item)}  */}
                    </Box>
                ))

            }
        </Stack>
    )
}

export default ChannelVideos;