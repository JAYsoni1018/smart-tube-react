import { Box, Stack, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import ReactPlayer from "react-player"
import { Link, useParams } from "react-router-dom"
import { fetchData } from "../utils/fetchData"
import { CheckCircle } from "@mui/icons-material"
import VisibilityIcon from '@mui/icons-material/Visibility';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import Videos from "./Videos"
const VideoDetail = ({ route }) => {
  const { id } = useParams();
  const [Data, setdata] = useState(null)
  const [RelatedVideos, setRelatedVideos] = useState(null)
  useEffect(() => {
    fetchData(`video/details/?id=${id}`).then(data => setdata(data))
    fetchData(`video/related-contents/?id=${id}`).then(data => setRelatedVideos(data))
  }, [id]);
  console.log(RelatedVideos)

  if (!Data) {
    return "Loading...";
  }

  return (
    <Box minHeight={"95vh"} >

      <Stack direction={{ xs: 'column', md: 'row' }} padding={'23PX'}>
        <Box flex={1}>
          <Box sx={{ width: '100%', position: 'sticky', top: '86px' }}>

            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
            <Typography color="#fff" variant='h5' fontWeight={"bold"} sx={{ marginTop: '12px', paddingY: '8px' }}>
              {Data?.title}
            </Typography>
            <Stack direction={'row'} justifyContent={'space-between'} sx={{ color: '#fff' }} py={1} ><Link to={`/channel/${Data?.author?.channelId}`} >
              <Typography color="#fff" variant={{ sm: 'subtitle1', md: 'h6' }} py={4}>
                {Data?.author?.title}
                <CheckCircle sx={{ fontSize: 12, color: "grey", ml: 1 }} />

              </Typography>
            </Link>
              <Stack direction={'row'} gap='20px' alignItems={'flex-end'}>
                <Typography color="#fff" variant={{ sm: 'subtitle1', md: 'h6' }} py={4}>

                  <VisibilityIcon variant='body1' sx={{ fontSize: 16, mr: 1, pt: 2 }} />
                  {parseInt(Data?.stats?.views).toLocaleString()}  views


                </Typography>
                <Typography color="#fff" variant={{ sm: 'subtitle1', md: 'h6' }} py={4}>

                  <ThumbUpIcon variant='body1' sx={{ fontSize: 16, mr: 1, pt: 2 }} />
                  {parseInt(Data?.stats?.likes).toLocaleString()}  Likes


                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Stack>
      {/* related videos section */}
      <Box px={2} py={{ md: 1 }} justifyContent={'center'} alignItems={'center'}>
        <Videos videos={RelatedVideos?.contents} direction='column' />
      </Box>
    </Box>
  )
}

export default VideoDetail