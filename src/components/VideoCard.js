import React from 'react'
import { demoThumbnailUrl, demoProfilePicture, demoVideoTitle, demoVideoUrl, demoChannelUrl, demoChannelTitle } from '../utils/constants'
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom'
import { CheckCircle } from '@mui/icons-material';
const VideoCard = ({ video }) => {
    // console.log(video)
    const truncateWords = (sentence, amount, tail) => {
        const words = sentence.split(" ");

        if (amount >= words.length) {
            return sentence;
        }

        const truncated = words.slice(0, amount);
        return `${truncated.join(" ")}${tail}`;
    };
    return (

        video?.title ? <>
            <Card sx={{ width: { md: "270px", xs: "100%", background: "#1e1e1e" } }}>
                <Link to={video?.videoId ? `/video/${video?.videoId}` : ""}>
            {/* {video.videoId ? `/video/${video.videoId}` : demoVideoUrl}  */}
                    <img src={video?.thumbnails[0].url} style={{ height: "209px", width: { md: "293px", xs: "100%" }, backgroundSize: "auto" }} alt={video?.title} />
            </Link>
                <CardContent sx={{ height: "80px", width: { md: "261px", sm: "377px", xs: "375px" }, padding: "9px", backgroundColor: "#1e1e1e" }}>

                    <Typography variant='subtitle1' fontWeight={"bold"} color={"white"}>
                        {truncateWords(video?.title, 10, "...")}
                    </Typography>

                    {
                        video?.author?.title ? <>

                            <Link to={video?.author?.channelId ? `/channel/${video?.author?.channelId}` : demoChannelUrl}>
                    <Typography variant='subtitle2' fontWeight={"bold"} color={"grey"}>
                                    {video?.author?.title.slice(0, 60)}
                        <CheckCircle sx={{ fontSize: 12, color: "grey", ml: 1, lineHeight: "2px" }} />
                    </Typography>
                </Link>
                        </> : <></>
                    }

            </CardContent>
        </Card>

        </> : ""


    )
}

export default VideoCard;