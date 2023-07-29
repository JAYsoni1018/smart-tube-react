import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchData } from "../utils/fetchData";
import { Box, CardContent, Typography } from "@mui/material";
import ChannelCard from "./ChannelCard"
import { CheckCircle } from "@mui/icons-material";
import Videos from "./Videos";
import ChannelVideos from "./ChannelVideos";
import VideoCard from "./VideoCard";
const ChannelDetail = () => {
  const { id } = useParams();
  const [channelInfo, setchannelData] = useState(null)
  const [video, setvideo] = useState([])
  useEffect(() => {


    fetchData(`channel/details/?id=${id}`).then((data) => {
      // console.log(data)

      setchannelData(data)
    });

    fetchData(`channel/videos/?id=${id}`).then((data) => {
      // console.log(data)

      setvideo(data.contents)
    });
  }, [id])
  console.log(channelInfo)
  console.log(video)
  return (
    <Box minHeight={"95vh"}>
      <Box>
        <div
          style={{
            background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 14%, rgba(0,212,255,1) 100%)',
            zIndex: 10,
            height: '300px'
          }} />
        <ChannelCard channelInfo={channelInfo} marginTop='-100px' />

        <Box display={"flex-start"} p='2'>
          <Box sx={{ m: { md: '20px' } }} />
          <ChannelVideos videos={video} channelInfo={channelInfo} />

        </Box>
      </Box>
    </Box>
  )
};

export default ChannelDetail;